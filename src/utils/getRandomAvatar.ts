const avatars = Object.values(
	import.meta.glob("@avatar/*.png", { eager: true, as: "url" })
);

export const getRandomAvatar = () =>
	avatars[Math.floor(Math.random() * avatars.length)];
