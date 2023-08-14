import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../utils/hooks/useAuth";
import useToast from "../../utils/hooks/useToast";

import googleSignInIcon from "/src/assets/btn_google_signin_light_normal_web.png";
import { AUTH } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getRandomAvatar } from "../../utils/getRandomAvatar";

type AccountProps = {
	buttonClassName: string;
};

export default function AccountWindow({ buttonClassName }: AccountProps) {
	const { setDisplayname, login, G_login, signup, logout, deleteAndSignout } =
		useAuth();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [isLoginPage, setIsLoginPage] = useState(true);

	const [error, setError] = useState(false);

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState<string | undefined>();
	const [avatar, setAvatar] = useState(getRandomAvatar());
	const [password, setPassword] = useState("");
	const [passwordRepeat, setPasswordRepeat] = useState("");
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	const accountWindowRef = useRef<HTMLDivElement | null>(null);
	const accountButtonRef = useRef<HTMLButtonElement | null>(null);

	//Click outside
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				accountWindowRef.current &&
				!accountWindowRef.current.contains(e.target as Node) &&
				!accountButtonRef.current?.contains(e.target as Node)
			) {
				setIsShown(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [accountWindowRef]);
	//sync password repeat verification
	useEffect(() => {
		if (!isLoginPage) {
			setPasswordsMatch(password === passwordRepeat);
		}
	}, [password, passwordRepeat]);

	useEffect(() => {
		onAuthStateChanged(AUTH, (data) => {
			setEmail("");
			setPassword("");
			setPasswordRepeat("");
			if (!data) {
				setIsLoggedIn(false);
				setAvatar(getRandomAvatar());
				return;
			}
			setIsLoggedIn(true);
			setUsername(data.displayName || "choom");
			setAvatar(data.photoURL || "");
		});
	}, []);

	const handleLogin = () => {
		if (email !== "" && password !== "") {
			login({ email, password }).catch((err) => {
				setError(true);
				useToast(err.code);
				console.log(err);
			});
		}
	};
	const handleGLogin = () => {
		G_login().catch((err) => {
			setError(true);
			useToast(err.code);
			console.log(err);
		});
	};

	const handleSignup = async () => {
		if (email !== "" && password !== "" && password === passwordRepeat) {
			signup({ email, password }).catch((err) => {
				setError(true);
				useToast(err.code);
				console.log(err);
			});
		}
	};

	const handleLogout = async () => {
		logout()
			.then(() => {
				setIsLoggedIn(false);
				setAvatar(getRandomAvatar());
			})
			.catch((err) => {
				setError(true);
				useToast(err.code);
				console.log(err);
			});
	};

	const handleDelete = async () => {
		if (
			confirm(
				`${username}, this action will delete all traces of you in our system. This is goodbye...`
			)
		) {
			deleteAndSignout().catch((err) => {
				setError(true);
				useToast(err.code);
				console.log(err);
			});
		}
	};

	return (
		<div className="relative">
			<button
				className={`${buttonClassName} min-w-fit`}
				ref={accountButtonRef}
				onClick={() => setIsShown(!isShown)}
			>
				<p className="p-1">
					<span className="hidden phone:inline mr-2">
						{isLoggedIn ? username : "Log in"}
					</span>
					<img
						src={avatar}
						alt="avatar"
						className="inline"
						style={{ maxHeight: "50px", maxWidth: "50px" }}
					/>
				</p>
			</button>
			{isShown && (
				<div
					className="fixed w-[100vw] bottom-24 left-0
					sm:absolute sm:top-0 sm:-translate-x-full sm:-translate-y-full sm:w-[450px]
					min-h-fit p-6 border-2 border-terminal-400 bg-black text-terminal-400 font-space text-lg"
					ref={accountWindowRef}
				>
					{isLoggedIn ? (
						<div>
							<p>
								Hi there,
								<input
									type="text"
									maxLength={25}
									className="w-1/2 bg-black border-2 border-terminal-400"
									value={username}
									onChange={(e) => {
										setUsername(e.currentTarget.value);
										setDisplayname(e.currentTarget.value);
									}}
								/>
							</p>
							<button
								onClick={handleLogout}
								className="w-full mt-2 py-2 border-2 border-terminal-400 hover:bg-terminal-400 hover:text-black"
							>
								Logout
							</button>
							<button
								onClick={handleDelete}
								className="w-full mt-2 py-2 bg-blood-400 text-white hover:bg-blood-600 hover:text-terminal-400"
							>
								DELETE ACCOUNT
							</button>
						</div>
					) : (
						<>
							{isLoginPage ? (
								<>
									<div className="flex flex-col gap-[20px]">
										<label className="flex gap-2 justify-between">
											Email
											<input
												className={`grow px-2 bg-olive-600 ${
													error ? "border-red-600 border-2" : ""
												}`}
												onChange={(e) => {
													setError(false);
													setEmail(e.currentTarget.value);
												}}
												type="email"
												name="email"
												placeholder="Enter your email"
												required
											/>
										</label>
										<label className="flex gap-2">
											Password
											<input
												className={`grow px-2 bg-olive-600 ${
													error ? "border-red-600 border-2" : ""
												}`}
												onChange={(e) => {
													setError(false);
													setPassword(e.currentTarget.value);
												}}
												type="password"
												name="password"
												placeholder="Enter your password"
												required
											/>
										</label>
										<button
											onClick={handleLogin}
											className="py-2 border-2 border-terminal-400 hover:bg-terminal-400 hover:text-black"
										>
											Login
										</button>
									</div>
									<p
										className="mt-3 text-center text-sm cursor-pointer"
										onClick={() => setIsLoginPage(false)}
									>
										Don’t have an account?{" "}
										<button className="text-blue-400">Sign up</button>
									</p>
									<div className="m-2 flex justify-center">
										<button
											className="flex justify-center items-center"
											onClick={handleGLogin}
										>
											<img
												className="cursor-pointer block active:"
												src={googleSignInIcon}
												alt="Google sign in icon"
												draggable={false}
											/>
										</button>
									</div>
								</>
							) : (
								<div className="flex flex-col gap-[20px]">
									<label className="flex gap-2 justify-between">
										Email
										<input
											className={`grow px-2 bg-olive-600 ${
												error ? "border-red-600 border-2" : ""
											}`}
											type="email"
											name="email"
											id="email"
											placeholder="Enter your email"
											onChange={(e) => setEmail(e.currentTarget.value)}
										/>
									</label>
									<label className="flex gap-2 justify-between">
										Password
										<input
											className={`grow px-2 bg-olive-600 ${
												error ? "border-red-600 border-2" : ""
											}`}
											type="password"
											name="password"
											value={password}
											onChange={(e) => setPassword(e.currentTarget.value)}
											placeholder="Enter your password"
											min={8}
											title="Password must be at least 6 characters long. Please include at least one uppercase, one lowercase letter and a number"
											required
										/>
									</label>
									<label className="relative flex gap-2 justify-between">
										Repeat
										<input
											className={`grow px-2 bg-olive-600 ${
												error ? "border-red-600 border-2" : ""
											}`}
											type="password"
											name="passwordRepeat"
											value={passwordRepeat}
											onChange={(e) => setPasswordRepeat(e.currentTarget.value)}
											placeholder="Enter your password again"
											min={8}
											required
										/>
										{passwordRepeat && !passwordsMatch && (
											<p className="absolute right-2 top-[2px] text-red-600 text-[12px] font-semibold">
												Passwords do not match
											</p>
										)}
									</label>

									<button
										className="py-2 border-2 border-terminal-400 hover:bg-terminal-400 hover:text-black"
										disabled={!passwordsMatch}
										onClick={handleSignup}
									>
										Create Account
									</button>
									<p
										className="mt-3 text-center text-sm cursor-pointer"
										onClick={() => setIsLoginPage(true)}
									>
										Already have an account?{" "}
										<button className="text-blue-400">Log in</button>
									</p>
								</div>
							)}
						</>
					)}
				</div>
			)}
		</div>
	);
}
