import Image from 'next/image';
import Landing from '@/layouts/Landing';
import TitleCard from '@/components/TitleCard';
import SignInSide from '@/components/SignInSide';
import SignUp from '@/components/SignUp/SignUp';

export default function Home() {
  const titleText = "Dungeon As Bro"

  return (
    <Landing>
      {/* <TitleCard titleText={titleText}/>
      <SignInSide/> */}
      <SignUp/>
    </Landing>
  )
};
