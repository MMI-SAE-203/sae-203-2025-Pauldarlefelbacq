import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

// liste des films par ordre de date de passage
export async function allFilms() {
    const records = await pb.collection('Film').getFullList({sort :'+Date_passage_F'}) ;
    return records
}

// liste des activités par ordre de date
export async function allActivites() {
    const recordsAct = await pb.collection('Activites').getFullList({sort :'+Date_A'}) ;
    return recordsAct
}

// liste de tous les réalisateurs par ordre alphabétique
export async function allReal() {
    const recordsReal = await pb.collection('Realisateurs').getFullList({sort :'+Nom_R'}) ;
    return recordsReal
}

//infos d'un film selon son id
export async function filmById(id) {
    const recordsFilmid = await pb.collection('Film').getOne(id) ;
    return recordsFilmid
}

//infos d'une activité selon son id
export async function actbyId(id) {
    const recordsActid = await pb.collection('Activites').getOne(id) ;
    return recordsActid
}

//infos d'un réalisateur selon son id
export async function realById(id) {
    const recordsRealid = await pb.collection('Realisateurs').getOne(id) ;
    return recordsRealid
}

//liste de toutes les activités d'un invité selon son id
export async function actByInvited(id) {
    const recordsActInv = await pb.collection('Activites').getFullList({ filter : `Invite_associe_I.id='${id}'`, expand: 'Invite_associe_I' }) ;
    return recordsActInv
}

//liste de toutes les activités d'un invité selon son id
export async function actByInvitedNom(Nom) {
    const recordsActInvnom = await pb.collection('Activites').getFullList({ filter : `Invite_associe_I.Nom_I='${Nom}'`, expand: 'Invite_associe_I' }) ;
    return recordsActInvnom
}


//ajout / suppression / mise à jour d'un film
export async function addNewFilm(film){
    await pb.collection('Film').create(film);
}

export async function DeleteFilmById(id){
    await pb.collection('Film').delete(id);
}

export async function updateFilmById(id, film){
    await pb.collection('Film').update(id, film);
}


//ajout / suppression / mise à jour d'un réalisateur
export async function addNewReal(Real){
    await pb.collection('Realisateurs').create(Real);
}

export async function DeleteRealById(id){
    await pb.collection('Realisateurs').delete(id);
}

export async function updateRealById(id, Real){
    await pb.collection('Realisateurs').update(id, Real);
}


//ajout / suppression / mise à jour d'une activité
export async function addNewAct(Act){
    await pb.collection('Activites').create(Act);
}

export async function DeleteActById(id){
    await pb.collection('Activites').delete(id);
}

export async function updateActById(id, Act){
    await pb.collection('Activites').update(id, Act);
}



export async function login() {
    await pb.collection('users').authWithPassword(document.getElementById("login").value,
    document.getElementById("passwd").value);
}

export async function register() {
  await pb.collection('users').create({
    email: document.getElementById("login").value,
    password: document.getElementById("passwd").value,
    passwordConfirm: document.getElementById("passwd").value,
  });
}
