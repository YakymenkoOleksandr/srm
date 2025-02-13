import AddCompanyButton from '@/app/components/add-company-button';
import Header from './components/header';
import Sidebar from './components/sidebar';

export default function Home() {
  return (
    <main>
      <Header>Home page</Header>
      <Sidebar></Sidebar>
      <AddCompanyButton />
    </main>
  );
}
