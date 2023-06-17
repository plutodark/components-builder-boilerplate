import FiveStar from 'src/components/FiveStar'
import Testing2 from 'src/components/Testing2'
import Portal from 'src/components/Portal'

const AcDaily = () => (<>
  <Portal component={(<FiveStar />)} id={'five-star'} />
  <Portal component={(<Testing2 />)} id={'testing2'} />
</>)

export default AcDaily