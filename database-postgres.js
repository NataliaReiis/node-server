import {randomUUID} from 'node:crypto'
import {sql} from './db.js'

export class DatabasePostgres {
   async list(search){
       let videos

       if (search) {
        videos = await sql `select * from videos where tilte ilike "%${search}"`
       } else {
        videos = await sql `select * from videos `
       }

       return videos
    }

    async create(video) {
        const videoId = randomUUID()
        const { title, description, duration } = videos

        await sql `insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`
    }

    update(id, video) {

    }

    delete(id) {

    }
}