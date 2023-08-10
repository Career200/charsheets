import { createContext, ReactElement, useContext, useMemo } from 'react';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	signInWithPopup,
	GoogleAuthProvider,
	updateProfile,
	User,
	deleteUser,
	//signInAnonymously,
	UserCredential
	//getAdditionalUserInfo
} from 'firebase/auth';
import { AUTH } from '../firebase';

interface UserData {
	email: string;
	password: string;
	name?: string;
}

interface AuthContextProps {
	getFirebaseUser: () => User | null;
	setDisplayname: (name: string, callback?: () => void) => Promise<void>;
	//signInAnon: () => Promise<UserCredential>;
	signup: (data: UserData) => Promise<UserCredential>;
	login: (data: UserData) => Promise<UserCredential>;
	G_login: () => Promise<UserCredential>;
	logout: () => Promise<unknown>;
	deleteAndSignout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
	const getFirebaseUser = () => AUTH.currentUser;
	const setDisplayname = async (name: string, callback?: () => void) => {
		if (AUTH.currentUser && name.length <= 25) {
			updateProfile(AUTH.currentUser, { displayName: name }).then(() =>
				callback?.()
			);
		}
	};

	//const signInAnon = async () => await signInAnonymously(AUTH);

	const signup = async (data: UserData) => {
		const cred = await createUserWithEmailAndPassword(
			AUTH,
			data.email,
			data.password
		);
		/* 		if (getAdditionalUserInfo(cred)?.isNewUser) {

		} */
		data.name ? await setDisplayname(data.name) : null;
		return cred;
	};

	const login = async (data: UserData) => {
		return await signInWithEmailAndPassword(AUTH, data.email, data.password);
	};

	const G_login = async () => {
		const G_AUTH = new GoogleAuthProvider();
		return await signInWithPopup(AUTH, G_AUTH);
	};

	const logout = async () => {
		if (AUTH.currentUser) {
			return await signOut(AUTH);
		}
	};

	const deleteAndSignout = async () => {
		if (AUTH.currentUser) {
			return await deleteUser(AUTH.currentUser);
		}
	};

	const value = useMemo(
		() => ({
			getFirebaseUser,
			setDisplayname,
			//signInAnon,
			signup,
			login,
			G_login,
			logout,
			deleteAndSignout
		}),
		[]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
