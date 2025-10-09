export let music: string[] = ["Future", "Lil Uzi Vert", "Travis Scott", "Playboi Carti", "Metro Boomin"];

export function printMusic(): void {
    console.log("MUSIC: ");
    console.log(music.join(", "));
}