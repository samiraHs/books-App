import BookSearch from "../components/BookSearch"
import BookDetails from '../components/BookDetails';

const Home = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-screen bg-cover bg-center opacity-70" style={{ backgroundImage: `url(https://images.pexels.com/photos/18620051/pexels-photo-18620051/free-photo-of-books-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1` }}>
        <BookSearch/>
        </div>
        <BookDetails/>

    </div>
  )
}
export default Home