import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	signInWithPopup,
	GoogleAuthProvider,
	updateProfile,
	User,
	deleteUser
} from 'firebase/auth';
import { createContext, ReactElement, useContext, useMemo } from 'react';
import { AUTH } from '../firebase';

interface UserData {
	email: string;
	password: string;
	name?: string;
}

interface AuthContextProps {
	getFirebaseUser: () => User | null;
	setDisplayname: (name: string, callback?: () => void) => Promise<void>;
	signup: (data: UserData) => Promise<unknown>;
	login: (data: UserData) => Promise<unknown>;
	G_login: () => Promise<void>;
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

	const signup = async (data: UserData) => {
		await createUserWithEmailAndPassword(AUTH, data.email, data.password);
		data.name ? await setDisplayname(data.name) : null;
	};

	const login = async (data: UserData) => {
		await signInWithEmailAndPassword(AUTH, data.email, data.password);
	};

	const G_login = async () => {
		const G_AUTH = new GoogleAuthProvider();
		await signInWithPopup(AUTH, G_AUTH);
	};

	const logout = async () => {
		await signOut(AUTH);
	};

	const deleteAndSignout = async () => {
		if (AUTH.currentUser) {
			await deleteUser(AUTH.currentUser);
		}
	};

	const value = useMemo(
		() => ({
			getFirebaseUser,
			setDisplayname,
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
