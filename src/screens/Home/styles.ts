import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52514e',
    padding: 15,
    borderRadius: 30,
    opacity: 0.9,
    marginHorizontal: 20,
    marginVertical: 50,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  logo: {
    resizeMode: 'contain',
    height: 60,
    maxWidth: 150,
  },
  type: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  table: {},
  row: {
    flexDirection: 'row',
    maxWidth: 300,
  },
  attributeKey: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
  attributes: {
    paddingTop: 5,
    color: '#fff',
    fontSize: 15,
    maxWidth: 400,
    textAlign: 'justify',
  },
  button: {
    margin: 50,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52514e',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  resultContainer: {
    width: 350,
    borderRadius: 50,
    backgroundColor: '#52514e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  fillBtn: {
    width: 100,
    height: 100,
    backgroundColor: '#00f',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillText: {
    color: '#fff',
    fontSize: 20,
  },
  finalPrice: {
    fontSize: 30,
  },
  moreInfoButton: {
    margin: 10,
    color: '#fff',
  },
  info: {
    flex: 1,
    height: 5000,
    maxHeight: 500,
  },
  priceContainer: {
    flexDirection: 'row',
    borderColor: '#fff',
    backgroundColor: '#000',
    opacity: 0.9,
    borderWidth: 2,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    alignItems: 'flex-end',
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  volume: {
    color: '#fff',
    fontSize: 15,
  },
})
