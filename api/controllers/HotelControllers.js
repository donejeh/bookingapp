import Hotel from "../models/Hotel.js";


export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
      const saveHotel = await newHotel.save();
      res.status(200).json(saveHotel);
    } catch (error) {
     next(error);
    }
}


export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
          req.params.id, 
          { $set: req.body }, 
          { new: true }
        );
        res.status(200).json(updatedHotel);
      } catch (error) {
        next(error)
      }
}


export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(
          req.params.id
        );
        res.status(200).json("Hotel has been deleted");
      } catch (error) {
        next(error);
      }
}

export const getSingleHotel = async (req, res, next) => {
    try {
        const hotel =  await Hotel.findById(
            req.params.id
          );
          res.status(200).json(hotel);
        } catch (error) {
         next(error);
        }
}


export const getAllHotel = async (req, res, next) => {
  try {
  const hotels =  await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
   next(error);
  }
}

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",").map(city => city.trim())

  try {
    const list = await Promise.all(cities.map(city => {
      return Hotel.countDocuments({city: city})
    }))

    res.status(200).json(list);
  } catch (error) {
   next(error);
  }
}

export const countByType = async (req, res, next) => {

  try {

    const hotel = await Hotel.countDocuments({type: "hotel"})
    const apartment = await Hotel.countDocuments({type: "apartment"})
    const resort = await Hotel.countDocuments({type: "resort"})
    const villa = await Hotel.countDocuments({type: "villa"})
    const cabin = await Hotel.countDocuments({type: "cabin"})
   
    res.status(200).json([
      {type: "hotel", count: hotelCount},
      {type: "hotel", count: hotelCount},
      {type: "hotel", count: hotelCount},
    ]);
  } catch (error) {
   next(error);
  }
}