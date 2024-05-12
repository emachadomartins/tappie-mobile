import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
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
  type: {
    color: '#fff',
    fontSize: 20,
  },
  table: {},
  row: {
    width: 350,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attributes: {
    color: '#fff',
    fontSize: 15,
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
})
