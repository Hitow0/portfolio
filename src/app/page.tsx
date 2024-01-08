import MainPage from "@/components/MainPage";
import APropos from "@/components/APropos";
import Competences from "@/components/Competences";
import Parcours from "@/components/Parcours";

export default function Home() {
  return (
      <div>
          <MainPage></MainPage>
          <APropos/>
          <hr/>
          <Competences/>
          <hr/>
          <Parcours/>
          <hr/>
      </div>
  )
}
