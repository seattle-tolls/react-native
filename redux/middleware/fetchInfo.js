import { FETCH_TOLL_INFO } from '../constants/action-types'
import { API_URL, AWS_API_KEY } from 'react-native-dotenv'
import { setTollInfo } from '../actions/toll'

const inits = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': AWS_API_KEY,
  },
}

const fetchInfo = ({ dispatch }) => next => async action => {
  console.log(AWS_API_KEY)

  if(action.type !== FETCH_TOLL_INFO)
    return next(action)
  try {
    const payload = await fetch(`${API_URL}/api/v1/tolls`, inits)
    const dataArr = await payload.json()

    const dataObj = dataArr.reduce((curr, next) => {
      let { toll, name, date, data } = next
      console.log('NEXT-->', name)
      return curr = { ...curr, [toll]:{ name, date, data } }
    }, {})

    console.log('DATAs-->', dataObj)

    dispatch(setTollInfo(dataObj))
  }
  catch (err) {
    console.log('ERROR:', err)
  }
}

export default fetchInfo