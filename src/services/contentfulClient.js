import {createClient} from 'contentful';
import { deliveryAccessToken, spaceId } from '../config'

const client = createClient({
  space: spaceId,
  accessToken: deliveryAccessToken
})

export function getCFClient () {
	return client
}