import { useState } from "react";
export default function PlaceGallery({place}){
    const [showAllPhotos, setShowAllPhotos] = useState(false);

    if(showAllPhotos){
        return(
            <div className="absolute inset-0 bg-black text-white min-w-full min-h-screen">
                <div className="bg-black p-8 grid gap-4">
                    <div>
                        <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
                        <button onClick={()=>setShowAllPhotos(false)} className="flex fixed right-12 top-8 gap-1 py-2 px-4 rounded-2xl items-center shadow shadow-gray-500 bg-white text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                            Close Photos
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo=>(
                        // eslint-disable-next-line react/jsx-key
                        <div className="mx-auto">
                            <img src={"http://localhost:4000/uploads/"+photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
                <div className=" grid gap-2 grid-cols-[2fr_1fr_1fr] rounded-2xl overflow-hidden">
                    <div>
                        {place.photos?.[0] && (
                         <img onClick={()=>setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={"http://localhost:4000/uploads/"+place.photos[0]} alt="" />
                        )}
                    </div>
                    <div className="grid">
                        {place.photos?.[1] && (
                            <img onClick={()=>setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={"http://localhost:4000/uploads/"+place.photos[1]} alt="" />
                        )}
                        <div className="overflow-hidden">
                            {place.photos?.[2] && (
                                <img onClick={()=>setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover relative top-2" src={"http://localhost:4000/uploads/"+place.photos[2]} alt="" />
                            )}
                        </div>
                    </div>
                    <div className="grid">
                        {place.photos?.[3] && (
                            <img onClick={()=>setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={"http://localhost:4000/uploads/"+place.photos[3]} alt="" />
                        )}
                        <div className="overflow-hidden">
                            {place.photos?.[4] && (
                                <img onClick={()=>setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover relative top-2" src={"http://localhost:4000/uploads/"+place.photos[4]} alt="" />
                            )}
                        </div>
                    </div>
                </div>
                <button onClick={()=>setShowAllPhotos(true)} className="flex gap-1 items-center absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                    </svg>
                    Show more photos
                </button>
            </div>
    );
}