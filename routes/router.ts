import { Router, Request, Response } from 'express';
import Server from '../classes/server';

export const router  = Router();

router.get('/mensajes', ( req: Request , res: Response)=>{
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!'
    });
});

router.post('/mensajes', ( req: Request , res: Response)=>{

    const { body, from } = req.body;

    const payload = {
        from,
        body
    }

    const server = Server.instance;

    server.io.emit('mensaje-nuevo', payload);

    res.json({
        ok: true,
        body,
        from
    });
});

router.post('/mensajes/:id', ( req: Request , res: Response)=>{

    const { body, from } = req.body;
    const id = req.params.id;

    const payload = {
        from,
        body
    }

    const server = Server.instance;

    server.io.in(id).emit('mensaje-privado', payload);

    res.json({
        ok: true,
        body,
        from,
        id
    });
});

export default router;