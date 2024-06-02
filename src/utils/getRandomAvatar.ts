const avatars: string[] = Object.values(
	import.meta.glob("@avatar/*.png", {
		eager: true,
		query: "?url",
		import: "default",
	})
);

export const getRandomAvatar = () =>
	avatars[Math.floor(Math.random() * avatars.length)];
