import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52514e',
    padding: 15,
    borderRadius: 30,
    opacity: 0.8,
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
    color: '#fff',
    fontSize: 15,
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
    backgroundColor: '#00f',
    padding: 5,
    borderRadius: 10,
  },
  moreInfoText: {
    color: '#fff',
  },
})
