import { Router, Request, Response } from 'express';

export const router  = Router();

router.get('/mensajes', ( req: Request , res: Response)=>{
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!'
    });
});

router.post('/mensajes/:id', ( req: Request , res: Response)=>{

    const { body, from } = req.body;
    const id = req.params.id;

    res.json({
        ok: true,
        body,
        from,
        id
    });
});

export default router;