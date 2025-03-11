import { allFilms, allActivites, allReal, filmById, actbyId, realById, actByInvited, actByInvitedNom, addNewAct, DeleteActById, updateActById, addNewFilm, DeleteFilmById, updateFilmById, addNewReal, DeleteRealById, updateRealById } from './backend.mjs';


// try { const records = await allFilms() ;
//     console.table(records) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try { const records = await allActivites() ;
//     console.table(records) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try { const records = await allReal() ;
//     console.table(records) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try { const records = await filmById("fjckun146289b62") ;
//     console.table(records) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try { const records = await actbyId("c663y8zv93x8175") ;
//     console.table(records) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try { const records = await realById("2oes6j6u44s4p40") ;
//     console.table(records) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try { const records = await actByInvited("o014d278f430qy1") ;
//     console.table(records) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try { const records = await actByInvitedNom("Julien Farault") ;
//     console.table(records) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try{
//     const film_v = {
//         "Nom_F": "test",
//         "Description_F": "test",
//         "BA_F": "https://example.com",
//         "Date_passage_F": "2022-01-01 10:00:00.123Z",
//         "Real": "2oes6j6u44s4p40",
//         "Categorie_F": [
//         "Action"
//     ],
//         "Duree": 123,
//         "Langage": "test"    
//     };
//     await addNewFilm(film_v);
// }catch(e) {
//     console.error(e);
// }

// try{
//     const film_v = {
//         "Nom_F": "test_2",
//         "Description_F": "testtest",
//         "BA_F": "https://example.com",
//         "Date_passage_F": "2022-01-01 10:00:00.123Z",
//         "Real": "2oes6j6u44s4p40",
//         "Categorie_F": [
//         "Action"
//     ],
//         "Duree": 123,
//         "Langage": "test"    
//     };
//     await updateFilmById("3lvco94h4435n57", film_v);
// }catch(e) {
//     console.error(e);
// }

// try{
//     await DeleteFilmById("3lvco94h4435n57");
// }catch(e){
//     console.error(e);
// }



// try{
//     const real = {
//         "Nom_R": "test",
//         "Bio_R": "test",
//         "Date_naissance_R": "2022-01-01 10:00:00.123Z",
//         "Est_Invite": true,
//         "invite": "2qyjmvkq75975p2"  
//     };
//     await addNewReal(real);
// }catch(e) {
//     console.error(e);
// }

// try{
//     const real = {
//         "Nom_R": "test_2",
//         "Bio_R": "testtest",
//         "Date_naissance_R": "2022-01-01 10:00:00.123Z",
//         "Est_Invite": true,
//         "invite": "2qyjmvkq75975p2"  
//     };
//     await updateRealById("3k5q873z8gs2342",real);
// }catch(e) {
//     console.error(e);
// }

// try{
//     await DeleteRealById("3k5q873z8gs2342");
// }catch(e){
//     console.error(e);
// }



// try{
//     const act = {
//         "Titre_A": "test",
//         "Date_A": "2022-01-01 10:00:00.123Z",
//         "Invite_associe_I": "2qyjmvkq75975p2",
//         "Resume_A": "test",
//         "Duree_A": 123 
//     };
//     await addNewAct(act);
// }catch(e) {
//     console.error(e);
// }

// try{
//     const act = {
//         "Titre_A": "test_2",
//         "Date_A": "2022-01-01 10:00:00.123Z",
//         "Invite_associe_I": "2qyjmvkq75975p2",
//         "Resume_A": "testtest",
//         "Duree_A": 123 
//     };
//     await updateActById("2b07dx6wr4xkw02",act);
// }catch(e) {
//     console.error(e);
// }

// try{
//     await DeleteActById("2b07dx6wr4xkw02");
// }catch(e){
//     console.error(e);
// }