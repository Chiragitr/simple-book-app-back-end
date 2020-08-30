import { Router, Request, Response } from 'express';
import { CommonQueries } from '../shared/commonQueries';

const router = Router();

const commonQueries = new CommonQueries();

router.get('/all',async (req:Request, res:Response)=>{
    let getAllBooks = await commonQueries.getBooks();
    return res.send(getAllBooks?
        {status:'success', data:getAllBooks}:
        {status:'failed', msg:'Something went wrong'}
        );
});

router.post('/add', async (req:Request, res:Response)=>{
    //console.log("req.body",req.body);
    let addBook = await commonQueries.addBook(req.body);
    //console.log("addBook",addBook);
    return res.send(addBook.affectedRows?
        {status:'success', msg:'Added Successfully' ,data:addBook}:
        {status:'failed', msg:'Something went wrong'}
        );
});

router.get('/:id', async (req:Request, res:Response)=>{
    let id = +req.params.id;
    let getBookById = await commonQueries.getBookById(id);
    return res.send(getBookById?
        {status:'success', data:getBookById}:
        {status:'failed', msg:'Something went wrong'}
        );
});

router.put('/update/:id', async (req:Request, res: Response)=>{
    let id = +req.params.id;
    let updateById = await commonQueries.updateById(id, req.body);
    return res.send(updateById.affectedRows?
        {status:'success', data:updateById}:
        {status:'failed', msg:'Something went wrong'}
        );
})

router.delete('/delete/:id', async (req:Request, res:Response)=>{
    let id = +req.params.id;
    console.log("inside delete");
    let deleteBookById = await commonQueries.deleteBookById(id);
    return res.send(deleteBookById.affectedRows?
        {status:'success', data:deleteBookById}:
        {status:'failed', msg:'Something went wrong'}
        );
})


export default router;