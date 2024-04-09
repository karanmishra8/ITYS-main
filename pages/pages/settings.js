import { Container } from 'react-bootstrap';
import { PageHeading } from 'widgets'
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences } from 'sub-components'

const Settings = () => {
  return (
    <Container fluid className="p-6">
      <PageHeading heading="General" />
      <GeneralSetting />
       {/* <EmailSetting />
      <Preferences />
      <Notifications />
      <DeleteAccount />  */}
    </Container>
  )
}

export default Settings