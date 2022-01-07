import Entries from "../components/Entries";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import '../App.css'

export default function GuestBook() {
  return (
  <div className="guest-book w-2/3 h-screen bg-slate-500 justify-items-center">
    <div className="cnt flex">
    <div></div>
    <main className="flex-col justify-self-center">
    <Input/>
    <Entries/>
    </main>
    <div></div>
    </div>
    </div>

    )
}
