import CTA from "components/home/CTA"
import BlogSection from "components/home/blogsection"
import Feactures from "components/home/feactures"
import Header from "components/home/header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"


function Home(){
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return (
        <Layout>
            <Navbar/>
            <div className="pt-32">
                <Header/>
                <Feactures/>
                <BlogSection/>
                <CTA/>
            </div>
            
            <Footer/>
        </Layout>
    )
}
export default Home