export default function numeroRandom(min, max) {
	console.debug( `-> ${Math.floor(Math.random() * (max - min + 1) + min)}` );
	return Math.floor(Math.random() * (max - min + 1) + min);
}
