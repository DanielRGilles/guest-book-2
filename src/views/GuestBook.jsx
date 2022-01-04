import Entries from "../components/Entries";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import '../App.css'

export default function GuestBook() {
  return (
  <div className="w-2/3 h-screen bg-slate-500 justify-items-center">
    <Header/>
    <div className="cnt flex">
    <div></div>
    <main className="flex-col justify-self-center items-center w-2/3">
    <Input/>
    <Entries/>
    <Footer/>  
    </main>
    <div></div>
    </div>
    </div>

    )
}
