'use client'
import React, { useState } from "react";
import Image from "next/image";
import Choosebutton from "@/components/Choosebutton"
import { HiOutlineCursorClick } from "react-icons/hi";

const books_COUPLES_FRIENDS_CHILDREN = [
    { code: 'COUPLES-01', imageSrc: '/image.jpg', title: 'Our Love Story: From First Hello to Forever' },
    { code: 'COUPLES-02', imageSrc: '/image3.jpg', title: 'The Day We Met: A Fairytale of Us' },
    { code: 'FRIENDS-01', imageSrc: '/image5.jpg', title: 'The Chronicles of Us: A Friendship Like No Other' },
    { code: 'FRIENDS-02', imageSrc: '/image2.jpg', title: 'Side by Side, Miles Apart' },
    { code: 'CHILDREN-01', imageSrc: '/image4.jpg', title: 'The Little Explorer & The Land of Wonders' },
    { code: 'CHILDREN-02', imageSrc: '/image3.jpg', title: 'Super Arya: The Hero of the Day' },
];
const options = ["Couple", "Friend", "Children", "Parent", "Grand Parent","Sibling", "Married Couple", "Teacher"];
const pagecount = [5,6,7,8,9,10,11,12];
const genderoptions = [`Male`,"Female","Others"]
const storytype = ["Best Friends Forever","Sibling Bonding Story","Friendship Adventures","Romantic Love Story","Anniversary Journey","Wedding Love Story","Long-Distance Love","First Meeting to Forever","Learning & Moral Stories","Superhero Journey","Magical Birthday Story","Animal & Nature Tales","A Grandparent’s Wisdom","A Letter to My Parents","Why Are You Special ?","A Letter to My Parents","My First Teacher: Mom/Dad"];
const coloroptions = [
    { name: "Pastel Romance", code: ["#FFC3A0", "#FFD3B6", "#F7D8BA"] },
    { name: "Vintage Gold & Beige", code: ["#E3C567", "#D8B384", "#F5E1C8"] },
    { name: "Cozy Sunset Tones", code: ["#FAD0C9", "#FFABAB", "#D4A5A5"] },
    { name: "Bright & Playful", code: ["#FF6B6B", "#F7B801", "#06D6A0"] },
    { name: "Retro Pop Colors", code: ["#FF4E50", "#FC913A", "#F9D423"] },
    { name: "Neon & High-Contrast", code: ["#1B998B", "#ED217C", "#2D3047"] },
    { name: "Fairy Tale Soft Tones", code: ["#F7CAC9", "#92A8D1", "#B5EAD7"] },
    { name: "Starry Night & Galaxy", code: ["#483D8B", "#2E3192", "#1C1C8D"] },
    { name: "Candyland & Fantasy", code: ["#FF80AB", "#FFD180", "#B39DDB"] },
    { name: "Monochrome & Minimal", code: ["#2C2C2C", "#737373", "#E0E0E0"] },
    { name: "Rustic Earthy Tones", code: ["#8D6E63", "#A1887F", "#D7CCC8"] },
    { name: "Watercolor Illustration", code: ["#A1C4FD", "#C2E9FB", "#FAD0C9"] }
];
const bookFormats = ["Hardcover","Paperback","Board Book","Spiral Bound","Gift Box Edition","Pop-Up Book","Accordion Fold Book","Storybook with Stickers","Interactive Lift-the-Flap Book","Personalized Scrapbook Style","Classic Novel-Style Binding"];


const books = [
    { code: 'FRIENDS-01', imageSrc: '/image5.jpg', title: 'The Chronicles of Us: A Friendship Like No Other' },
    { code: 'FRIENDS-02', imageSrc: '/image.jpg', title: 'Side by Side, Miles Apart' },
    { code: 'CHILDREN-01', imageSrc: '/image2.jpg', title: 'The Little Explorer & The Land of Wonders' },
    { code: 'CHILDREN-02', imageSrc: '/image5.jpg', title: 'Super Arya: The Hero of the Day' },
    { code: 'PARENTS-01', imageSrc: '/image4.jpg', title: 'A Love Letter to Mom & Dad' },
    { code: 'PARENTS-02', imageSrc: '/image3.jpg', title: 'The Day You Became My Hero' },
    { code: 'GRANDPARENTS-01', imageSrc: '/images.jpg', title: 'Grandpa’s Tales & Grandma’s Magic' },
    { code: 'GRANDPARENTS-02', imageSrc: '/image2.jpg', title: 'Letters to My Grandparents' },
    { code: 'SIBLINGS-01', imageSrc: '/image3.jpg', title: 'The Great Sibling Adventure' },
    { code: 'SIBLINGS-02', imageSrc: '/image4.jpg', title: 'My Brother/My Sister: My First Best Friend' },
    { code: 'HUSBAND-01', imageSrc: '/image5.jpg', title: 'Through Your Eyes: A Story of Us' },
    { code: 'HUSBAND-02', imageSrc: '/image3.jpg', title: 'Why I Love You: 10,000 Reasons & More' },
    { code: 'WIFE-01', imageSrc: '/image.jpg', title: 'The Queen of My Heart' },
    { code: 'WIFE-02', imageSrc: '/image4.jpg', title: 'Our Journey: From Strangers to Soulmates' },
    { code: 'TEACHERS-01', imageSrc: '/image2.jpg', title: 'The Teacher Who Changed My Life' },
    { code: 'TEACHERS-02', imageSrc: '/image3.jpg', title: 'The Magic of Teaching: A Tribute to Riya Ma\'am' }
]

function page(){
    const [selectedOption, setSelectedOption] = useState("Couples");
    const [selectedPagecount, setSelectedPagecount] = useState("Select Number of Pages");
    const [selectedGender, setSelectedGender] = useState("Select Gender of Character");
    const [selectedStorytype, setSelectedStorytype] = useState("Select Story Type");
    const [selectedcolor, setSelectedcolor] = useState("Select Theme");
    const [selectedformat, setSelectedformat] = useState("Select Format");
    const [fileNames, setFileNames] = useState([]);

    
    const [isOpenbook, setIsOpenbook] = useState(false);
    const [isOpenpage, setIsOpenpage] = useState(false);
    const [isOpengender, setIsOpengender] = useState(false);
    const [isOpenstorytype, setIsOpenstorytype] = useState(false);
    const [isOpencolor, setIsOpencolor] = useState(false);
    const [isOpenformat, setIsOpenformat] = useState(false);
    
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files).map((file) => file.name);
      setFileNames(files);
    };
    const [selected, setSelected] = useState("/image.jpg");
    function handleSelect(e,value){
        e.preventDefault();
        setSelected(value);
    }

    return (
        <div className='h-fit px-10 py-10 bg-amber-100'>
            <h2 className="text-amber-950 text-3xl font-medium border-b-[1px] border-amber-900 mb-10">Configure Your Book</h2>
            <div className="w-full flex relative">
                <div className="w-1/2 h-fit flex items-center justify-center sticky top-20">
                <Image
                src={selected}
                className="w-80"
                width={1000}
                height={1000}
                alt={selected}
                />
                </div>
                <div className="w-2/3 bg-amber-100 ">
                    <form className="h-full flex flex-col items-center justify-around">
                        <div className="relative w-5/6 mb-10">
                            <button
                                type="button"
                                onClick={() => setIsOpenbook(!isOpenbook)}
                                className="w-full flex items-center justify-between px-4 py-2 bg-amber-100 border-[1px] border-amber-950 focus:border-[3px]"
                            >
                                {selectedOption}
                            </button>
                            {isOpenbook && (
                                <ul className="absolute w-full bg-amber-50 border border-amber-900 shadow-md z-10">
                                {options.map((option, index) => (
                                    <li
                                    key={index}
                                    onClick={() => {
                                        setSelectedOption(option);
                                        setIsOpenbook(false);
                                    }}
                                    className="px-4 py-2 hover:bg-amber-900  hover:text-amber-100 cursor-pointer"
                                    >
                                    {option}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                        <div className="w-5/6 bg-amber-100 mb-10 border-[1px] focus:border-[3px] border-amber-950 " >
                            <label htmlFor="photos" className="px-3 py-2 w-full text-amber-950 flex items-center gap-3">Choose File <HiOutlineCursorClick /></label>
                            <input type="file" className="hidden" name="photos" id="photos" onChange={handleFileChange} multiple />
                            {fileNames.length > 0 && (
                                <div className="mt-2 text-sm text-amber-900">
                                <strong>Selected Files:</strong>
                                <ul className="list-disc ml-4">
                                    {fileNames.map((name, index) => (
                                    <li key={index}>{name}</li>
                                    ))}
                                </ul>
                                </div>
                            )}
                        </div>
                        <input type="text" className="px-3 py-2 w-5/6 bg-amber-100 mb-10 border-[1px] focus:border-[3px] border-amber-950" placeholder="Names of Characters" name="story" id="story" />
                        <div className="relative w-5/6 mb-10">
                            <button
                                type="button"
                                onClick={() => setIsOpengender(!isOpengender)}
                                className="w-full flex items-center justify-between px-4 py-2 bg-amber-100 border-[1px] border-amber-950 focus:border-[3px]"
                            >
                                {selectedGender}
                            </button>
                            {isOpengender && (
                                <ul className="absolute w-full bg-amber-50 border border-amber-900 shadow-md z-10">
                                {genderoptions.map((option, index) => (
                                    <li
                                    key={index}
                                    onClick={() => {
                                        setSelectedGender(option);
                                        setIsOpengender(false);
                                    }}
                                    className="px-4 py-2 hover:bg-amber-900  hover:text-amber-100 cursor-pointer"
                                    >
                                    {option}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                        <input type="text" className="px-3 py-2 w-5/6 bg-amber-100 mb-10 border-[1px] focus:border-[3px] border-amber-950" placeholder="Describe Your Character" name="story" id="story" />
                        <div type="" className="px-3 py-2 w-5/6 bg-amber-100 mb-10 border-[1px] focus:border-[3px] border-amber-950" name="BookType" id="BookType">
                            <h2 className="text-2xl font-bold text-amber-950 border-b-[1px] border-amber-900 ">COUPLES_FRIENDS_CHILDREN</h2>
                            <div className="flex flex-wrap gap-4 items-start justify-around my-5">
                                {books_COUPLES_FRIENDS_CHILDREN.map((book, index) => (
                                <button key={index} onClick={(e)=>handleSelect(e,book.imageSrc)} className="w-1/4">
                                    <Choosebutton 
                                    key={book.code} 
                                    imageSrc={book.imageSrc} 
                                    title={book.title}
                                    />
                                </button>
                                ))}
                            </div>
                        </div>
                        <div className="relative w-5/6 mb-10">
                            <button
                                type="button"
                                onClick={() => setIsOpenstorytype(!isOpenstorytype)}
                                className="w-full flex items-center justify-between px-4 py-2 bg-amber-100 border-[1px] border-amber-950 focus:border-[3px]"
                            >
                                {selectedStorytype}
                            </button>
                            {isOpenstorytype && (
                                <ul className="absolute w-full bg-amber-50 border border-amber-900 shadow-md z-10">
                                {storytype.map((option, index) => (
                                    <li
                                    key={index}
                                    onClick={() => {
                                        setSelectedStorytype(option);
                                        setIsOpenstorytype(false);
                                    }}
                                    className="px-4 py-2 hover:bg-amber-900  hover:text-amber-100 cursor-pointer"
                                    >
                                    {option}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                        <div className="relative w-5/6 mb-10">
                            <button
                                type="button"
                                onClick={() => setIsOpenstorytype(!isOpenstorytype)}
                                className="w-full flex items-center justify-between px-4 py-2 bg-amber-100 border-[1px] border-amber-950 focus:border-[3px]"
                            >
                                {selectedStorytype}
                            </button>
                            {isOpenstorytype && (
                                <ul className="absolute w-full bg-amber-50 border border-amber-900 shadow-md z-10">
                                {storytype.map((option, index) => (
                                    <li
                                    key={index}
                                    onClick={() => {
                                        setSelectedStorytype(option);
                                        setIsOpenstorytype(false);
                                    }}
                                    className="px-4 py-2 hover:bg-amber-900  hover:text-amber-100 cursor-pointer"
                                    >
                                    {option}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                        <div className="relative w-5/6 mb-10">
                            <button
                                type="button"
                                name="pagecount"
                                onClick={() => setIsOpenpage(!isOpenpage)}
                                className="w-full flex items-center justify-between px-4 py-2 bg-amber-100 border-[1px] border-amber-950 focus:border-[3px]"
                            >
                                {selectedPagecount}
                            </button>
                            <p className="w-full text-right">Excluding cover page</p>
                            {isOpenpage && (
                                <ul className="absolute w-full bg-amber-50 border border-amber-900 shadow-md z-10">
                                {pagecount.map((option, index) => (
                                    <li
                                    key={index}
                                    onClick={() => {
                                        setSelectedPagecount(option);
                                        setIsOpenpage(false);
                                    }}
                                    className="px-4 py-2 hover:bg-amber-900  hover:text-amber-100 cursor-pointer"
                                    >
                                    {option}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                        <div className="relative w-5/6 mb-10">
                            <button
                                type="button"
                                onClick={() => setIsOpencolor(!isOpencolor)}
                                className="w-full flex items-center justify-between px-4 py-2 bg-amber-100 border-[1px] border-amber-950 focus:border-[3px]"
                            >
                                {selectedcolor}
                            </button>
                            {isOpencolor && (
                            <ul className="absolute w-full bg-amber-50 border border-amber-900 shadow-md z-10">
                                {
                                coloroptions.map((option,index)=>(
                                        <li 
                                        key={index}
                                        onClick={() => {
                                            setSelectedcolor(option.name);
                                            setIsOpencolor(false);
                                        }}
                                        className="px-4 py-2 hover:bg-amber-900  hover:text-amber-100 cursor-pointer"
                                        >
                                            {option.name}
                                            <div className="flex">
                                            {
                                                option.code.map((code,i)=>(
                                                        <div key = {i} className={`px-3 py-2 bg-[${code}]`}>{code}</div>
                                                ))
                                            }
                                            </div>
                                        </li>
                                ))}
                            </ul>
                            )}
                        </div>
                        <div className="relative w-5/6 mb-10">
                            <button
                                type="button"
                                onClick={() => setIsOpenformat(!isOpenformat)}
                                className="w-full flex items-center justify-between px-4 py-2 bg-amber-100 border-[1px] border-amber-950 focus:border-[3px]"
                            >
                                {selectedformat}
                            </button>
                            {isOpenformat && (
                                <ul className="absolute w-full bg-amber-50 border border-amber-900 shadow-md z-10">
                                {bookFormats.map((option, index) => (
                                    <li
                                    key={index}
                                    onClick={() => {
                                        setSelectedformat(option);
                                        setIsOpenformat(false);
                                    }}
                                    className="px-4 py-2 hover:bg-amber-900  hover:text-amber-100 cursor-pointer"
                                    >
                                    {option}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                        <input type="text" className="px-3 py-2 w-5/6 bg-amber-100 mb-10 border-[1px] focus:border-[3px] border-amber-950" placeholder="Special Note for Your Special" name="story" id="story" />
                        <button 
                        type="submit"
                        className="w-5/6 py-2 flex items-center justify-center gap-5 text-lg font-bold bg-amber-950 text-amber-100 hover:scale-105 duration-500 ease-in-out">Add to Cart</button>
                    </form>
                </div>
            </div>
        </div>
    )   
}

export default page;