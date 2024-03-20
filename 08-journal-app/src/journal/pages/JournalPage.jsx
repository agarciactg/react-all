import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
// import { NoteView } from "../views"
import { NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"


export const JournalPage = () => {
  return (
    <JournalLayout>
        {/* <Typography >El Lorem ipsum, como ya sabrás, es un texto utilizado habitualmente en diseño y maquetación, que permite comprobar que los espacios están bien distribuidos y las tipografías funcionan correctamente.</Typography> */}
        {/* <MailOutline/> */}
        <NothingSelectedView/>
        {/* <NoteView/> */}

        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
    </JournalLayout>
  )
}
