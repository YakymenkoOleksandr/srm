import Image from 'next/image';
import StatusLabel, { Status } from './components/status-label';
import { headers } from 'next/headers';
import AddCompanyButton from '../app/components/add-company-button';
import ServerComponent from './components/server-component';
import ClientComponent from './components/client-component';
import ServerComponentCopy from './components/server-component-copy';
import MagicButton from './components/magic-button';

export default function Home() {
  console.log(headers());
  
  return (
      <main >
      <h1 className="text-xl">Da bliat sluchilos {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      </main>

  );
}
