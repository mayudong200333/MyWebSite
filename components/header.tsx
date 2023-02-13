import Link from 'next/link'
import Container from '../components/container'

const Header:React.FC = () => {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-5">
          <Link href="/">
            About me
          </Link>
          <Link href="/posts">
            My Blogs
          </Link>
          <Link href="/posts">
            My Research and Projects
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header