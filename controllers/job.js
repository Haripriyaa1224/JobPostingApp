const JobModel = require("../models/job");

const createJob = async (req, res)=>{
    console.log(req.body); //to get the data sent to the server

    //to save in DB
    const jobObj = req.body;
    const newJob = new JobModel(jobObj);
    const newlySavedJob = await newJob.save(); //to insert data into DB 
    console.log(newlySavedJob);

    res.json({
        success: true,
        message:"Job created successfully",
        jobId : newlySavedJob._id
    });
};

const listJob = async (req, res)=>{
    const {minSalary, maxSalary} = req.query; //query parameter
    const jobList = await JobModel.find({
        $and:[{salary:{$gte:minSalary}}, {salary:{$lte:maxSalary}}] //To filter jobs depending on min salary and maxSalary
    });
    
    console.log(jobList);

    res.json({
        success: true,
        message:"List jodb API",
        data: jobList
    });
};

const editJob = async (req, res)=>{
    const jobId = req.params.id;
    console.log(jobId);
    console.log(req.body); //contains the data we send via body of postman

    //JobModel.findIdAndUpdate(_ID TO FIND THE RECORD, FIELDS WITH DATA TO UPDATED)

    await JobModel.findByIdAndUpdate(jobId, req.body)  //to find and update

    //JobModel.findOneandUpdate(FInd Objected, Update record)

    const findObject = {
        title:"Software Engineer Jr."
    }
    const updateObject = {
        location:"Cityvilla, USA (Edited)"
    }

    await JobModel.findOneAndUpdate(findObject, updateObject)

    res.json({
        success: true,
        message:"Job updated successfully"
    });
};

const deleteJob = async (req, res)=>{
    const jobId = req.params.id;
    await JobModel.findByIdAndDelete(jobId);
    // JobModel.findOneAndDelete(findObj);
    // JobModel.deleteMany();
    res.json({
        success: true,
        message:`job id ${req.params.id} deleted`,
        
    });
};

const jobController = {
    createJob,
    listJob,
    deleteJob,
    editJob,
}

module.exports = jobController;