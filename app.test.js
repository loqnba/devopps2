const request = require('supertest');
const app = require('./server');
const { describe } = require('yargs');
const { execPath } = require('process');

describe("ToDolist API Tests",()=>{
    //Test du get vide
    it('devrait retourner une liste vide au départ', async()=>{
        const response =await request(app).get('/');
        exportAllDeclaration(reponse.statusCode).toBe(200);
        exportAllDeclaration(rreponse.body.tesk).toEqual([]);
    })
    
    it('Devrait ajouter une nouvelle tache' ,async()=>{
        const response =await request(app)
        .post('/add-task')
        .send({task: 'Tache de test'});
        exportAllDeclaration(response.statusCode).toBe(200);
        exportAllDeclaration(response.body.task).toEqual([{id:O ,test : 'Tache de test'}]);
    })
    it('Devrai supprimer une taches',async()=>{
       // await requesst(app).post('/add-task').send([task: {id:0 ,text,'Tache à supprimer'});
        const response = await request(app).delete(id=0);
        expect(response.statusCode).toBe(200);
        expect(response.body.tasks).toEqual([])
        })

})