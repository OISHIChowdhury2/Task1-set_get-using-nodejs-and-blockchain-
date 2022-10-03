const { Router} = require('express');
const router = Router();
const contract= require('./controller');



router.get('/', (req, res) => {
    return res.status(200).json({})
})
// router.post('/setUser', async function(req, res, next)  {
       
//     // console.log(req.body.name);
          
//     //  try{
//     //         let txHash = await contract.setUser(
//     //             req.body.name,
//     //             req.body.addres,
//     //             req.body.phone
//     //         );
//     //          //console.log(setUser);
//     //         return res.status(200).json({txHash: txHash});
//     //     }
//     // catch (ex) {
//     //     console.log(ex);
//     //     return res.status(500).json({message: ex.toString()});
//     // }
// });

// router.get('/get-user', async function (req, res, next) {
//     // try {
//     //     let nl = await SetGetContract.getInfo(req.user.Contract);
//     //     return res.status(200).json({ nidLog: nl });}
//     // catch (ex) {
//     //     console.log(ex);
//     //     return res.status(500).json({message: ex.toString()}); }
//     try {
//         let nl = await contract.getInfo(req.user.name);
//         return res.status(200).json({message: nl});
//     }
//     catch (ex) {
//         console.log(ex);
//         return res.status(500).json({message: ex.toString()});
//     }
// });

module.exports = router;