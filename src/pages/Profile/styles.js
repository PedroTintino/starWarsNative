import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#1a1a1a',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
  detail: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
});
