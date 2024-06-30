const Hall = [
  { Hall_id: 1, Hall_Name: "large", H_AvaSeate: 100, HoursPrice: 800, amenites: "AC/Toilat/WIFI" ,statusAva:"booked" },
  { Hall_id: 2, Hall_Name: "medium", H_AvaSeate: 50, HoursPrice: 500, amenites: "AC/Toilat/WIFI" ,statusAva:"booked"},
  { Hall_id: 3, Hall_Name: "small", H_AvaSeate: 20, HoursPrice: 300, amenites: "AC/Toilat/WIFI" ,statusAva:"booked"},
  { Hall_id: 4, Hall_Name: "medium", H_AvaSeate: 50, HoursPrice: 500, amenites: "AC/Toilat/WIFI" ,statusAva:"unbooked"},
  { Hall_id: 5, Hall_Name: "large", H_AvaSeate: 100, HoursPrice: 800, amenites: "AC/Toilat/WIFI" ,statusAva:"unbooked"},
];

const Customer = [
  {Cus_id:1,Cus_Name:"Rupen",Data:"30/06/24",Hall_id:1,S_Time:"10:00 AM",E_Time:"10:00 PM"},
  {Cus_id:2,Cus_Name:"Akash",Data:"3/07/24",Hall_id:2,S_Time:"10:00 AM",E_Time:"10:00 PM"},
  {Cus_id:3,Cus_Name:"giri",Data:"10/08/24",Hall_id:3,S_Time:"10:00 AM",E_Time:"10:00 PM"},
  {Cus_id:4,Cus_Name:"hari",Data:"20/12/24",Hall_id:2,S_Time:"10:00 AM",E_Time:"10:00 PM"},
]


// ! Get All Details Get Method

export const getDetailsHall = (req,res)=>{
     res.status(200).json({data:Hall})
}

// ! create Hall Post Method

export const createHall = (req,res)=>{

    const {Hall_Name,H_AvaSeate,HoursPrice,amenites,statusAva} = req.body
    const newCreate = {
        Hall_id:Hall.length + 1,
        Hall_Name:Hall_Name,
        H_AvaSeate:H_AvaSeate,
        HoursPrice:HoursPrice,
        amenites:amenites,
        statusAva:statusAva,
    }

    Hall.push(newCreate)
    res.status(200).json({message:"Hall create Successfully",data:newCreate})  
}

// ! Get Customer data

export const CustomerData = (req,res) =>{
  res.status(200).json({data:Customer})
}

// ! Add newCoustomer Data 

export const AddCustomer = (req,res)=>{
    const {Cus_Name,Data,S_Time,E_Time} = req.body
    const newCoustomer ={
      Cus_id:Customer.length + 1,
      Cus_Name:Cus_Name,
      Data:Data,
      Hall_id:Hall.length + 1,
      S_Time:S_Time,
      E_Time:E_Time,
    }
    Customer.push(newCoustomer)
    res.status(200).json({ message:"Customer Add Successfully",data:newCoustomer})
}

// ? Hall Booked Fliter 

export const FliterHallBook = (req,res)=>{

// ! Filter Booked Hall

const bookedHalls = Hall.filter((ele=>ele.statusAva === "booked" ));

// ! Map over booked halls to find customer details

const bookedhall_Customer = bookedHalls.map((hall)=>{

const customer = Customer.find(cus => cus.Hall_id === hall.Hall_id);
 return{
    Hall_id: hall.Hall_id,
    Hall_Name:hall.Hall_Name,
    Cus_Name:  customer.Cus_Name,
    Data: customer.Data,
    S_Time: customer.S_Time, 
    E_Time: customer.E_Time,
 }
 
})
res.status(200).json({message:"Fliter BookHall Details",data:bookedhall_Customer });
}


// ? Customer Booked Data

export const FliterCustomer = (req,res) =>{

  const BookedCustomer = Hall.filter((ele)=>ele.statusAva === "booked")
  
  const Booked_Cus = BookedCustomer.map((hal)=>{
  const cus = Customer.find((ele)=>ele.Hall_id === hal.Hall_id)
  return{
    Cus_Name:  cus.Cus_Name,
    Hall_Name:hal.Hall_Name,
    Data: cus.Data,
    S_Time: cus.S_Time, 
    E_Time: cus.E_Time,
  }
  })

  res.status(200).json({message:"Filter Customer Hall Booking Details",data:Booked_Cus})
  
}

// ? How many times Booked Hall

export const Cus_many_Booked = (req,res)=>{

const bookedhall = Hall.filter((ele)=>ele.statusAva === "booked")

const filetr = bookedhall.map((hal)=>{
     const find = Customer.find((ele)=>ele.Hall_id === hal.Hall_id)

     return{
      Cus_Name:  find.Cus_Name,
      Hall_Name:hal.Hall_Name,
      Data: find.Data,
      S_Time: find.S_Time, 
      E_Time: find.E_Time,
      Cus_id:find.Cus_id,
      Data: find.Data,
      statusAva:hal.statusAva,



     }
})

res.status(200).json({message:"Filter",data:filetr})

}






