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



export async function getFilms(){
    try {
        let data = await pb.collection('Film').getFullList({
            sort: '+Date_passage_F',
    });
    data = data.map((item) => {
        item.img = pb.files.getURL(item, item.affiche_F);
        return item;
     });
    return data;
    } catch(error){
        console.log("Une erreur est survenue en lisant la liste des films", error);
    }
}



export async function getFilm(id) {
    try {
        let data = await pb.collection('Film').getOne(id);
        data.imageUrl = pb.files.getURL(data, data.affiche_F);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant le film', error);
        return null;
    }
}



export async function addFilm(filme) {
    try {
        await pb.collection('Film').create(filme);
        return {
            success: true,
            message: 'Film ajouté avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant le film', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant le film'
        };
    }
}



export async function filterByCat(categorie) {
    try {
        console.log('cat', categorie);
        let data = await pb.collection('Film').getFullList({
            sort: '+Date_passage_F',
            filter: `Categorie_F ~ "${categorie}"`
        });
        console.log(data)
        data = data.map((film) => {
            film.imageUrl = pb.files.getURL(film, film.Affiche_F);
            return film;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en filtrant la liste des films', error);
        return [];
    }
}


export async function byLang(lang){
    const Langrecords = await pb.collection('Film').getFullList( { filter : `Langage="${lang}"` }) ;
    return Langrecords
}


export async function allFilmsByRealId(id){
    let realFilmRecordsID = await pb.collection('Film').getFullList({ filter : `Real.id='${id}'`, expand: 'Real' }) ;
    realFilmRecordsID = realFilmRecordsID.map((film) => {
        film.imageUrl = pb.files.getURL(film, film.affiche_F);
        return film;
    });
    return realFilmRecordsID
}


export async function getReals(){
    try {
        let data = await pb.collection('Realisateurs').getFullList({
            sort: '+Nom_R',
    });
    data = data.map((item) => {
        item.img = pb.files.getURL(item, item.Photo_I);
        return item;
     });
    return data;
    } catch(error){
        console.log("Une erreur est survenue en lisant la liste des films", error);
    }
}
export async function getFilms(){
    try {
        let data = await pb.collection('Film').getFullList({
            sort: '+Date_passage_F',
    });
    data = data.map((item) => {
        item.img = pb.files.getURL(item, item.affiche_F);
        return item;
     });
    return data;
    } catch(error){
        console.log("Une erreur est survenue en lisant la liste des films", error);
    }
}




export async function getReal(id) {
    try {
        let data = await pb.collection('Realisateurs').getOne(id);
        data.imageUrl = pb.files.getURL(data, data.Image_R);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant les réalisateurs', error);
        return null;
    }
}

export async function getInv(id) {
    try {
        let data = await pb.collection('Invites').getOne(id);
        data.imageUrl = pb.files.getURL(data, data.Photo_I);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant les invités', error);
        return null;
    }
}