import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
        {/* <Typography >El Lorem ipsum, como ya sabrás, es un texto utilizado habitualmente en diseño y maquetación, que permite comprobar que los espacios están bien distribuidos y las tipografías funcionan correctamente.</Typography> */}
        {/* <MailOutline/> */}
        <NothingSelectedView/>
    </JournalLayout>
  )
}
