const Contact = require("../model/contact");

exports.postContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    //check if name and email
    if (!name || !email) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    //check if email exist
    const isExist = await Contact.findOne({ email: email });
    if (isExist) {
      return res.status(400).send({ msg: "Contact Already Used!!!" });
    }

    const newContact = new Contact({ ...req.body });
    await newContact.save();
    return res
      .status(200)
      .send({ msg: "Adding contact successfully.", response: newContact });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "can not add contact" });
  }
};


exports.getContacts = async(req,res)=>{
    try {
        const contacts = await Contact.find({})
        return res
        .status(200)
        .send({ msg: "Get contacts successfully.", response: contacts });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ msg: "can not get contacts" });
    }
}

exports.getContact = async(req,res)=>{
    try {
        const {id} = req.params
        // console.log(await Contact.findById(id))
        const contact = await Contact.findById(id)
        // if (!contact) {
        //     return res.status(400).send({ msg: "Contact ID Not Found!!!" });
        // }
        return res
        .status(200)
        .send({ msg: "Get contact by ID successfully.", response: contact });
    } catch (error) {
        // console.log(error)
        return res.status(400).send({ msg: "can not get contact by id" });
    }
}

exports.updateContact = async(req,res)=>{
    try {
        const {id} = req.params
        const contact = await Contact.updateOne({_id:id})
        return res
        .status(200)
        .send({ msg: "Update contact by ID successfully."});
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: "can not update contact" });
    }
}

exports.deleteContact = async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.deleteOne({_id:id})
        return res
        .status(200)
        .send({ msg: "Delete contact successfully."});
    } catch (error) {
        console.log(error)  
        return res.status(400).send({ msg: "can not update contact" });
    }
}