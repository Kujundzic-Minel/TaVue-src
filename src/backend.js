import PocketBase from 'pocketbase';

export async function allLunettes() {
    const pb = new PocketBase();
    const listeLunettes = await pb.collection("lunettes").getFullList();
    return listeLunettes;
}
const record = await allLunettes(); 