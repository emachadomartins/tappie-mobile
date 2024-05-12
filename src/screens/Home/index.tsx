import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

interface HomeProps {
  beer: {
    name: string
    type: string
    origin: string
    price: number
    image?: string
    brand: string
  }
}

export const Home: React.FC<HomeProps> = ({ beer }: HomeProps) => {
  const [selected, setSelected] = useState(false)
  const [finalPrice, setFinalPrice] = useState(0)
  const [finalVolume, setFinalVolume] = useState(0)
  const [fillInterval, setFillInterval] = useState<NodeJS.Timeout>()
  const [stopInterval, setStopInterval] = useState<NodeJS.Timeout>()
  const { name, type, origin, price, image, brand } = beer

  const handleSelect = () => {
    clearInterval(stopInterval)
    setSelected(true)
  }

  const handleFill = () => {
    const interval = setInterval(() => {
      setFinalVolume(prev => prev + 10)
      setFinalPrice(prev => prev + 0.1 * price)
    }, 100)

    setFillInterval(interval)
  }

  const handleStopFill = () => {
    clearInterval(fillInterval)
    const interval = setInterval(() => {
      setSelected(false)
      setFinalPrice(0)
      setFinalVolume(0)
    }, 5000)
    setStopInterval(interval)
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          image ? image : require('../../assets/placeholder.png')
        }
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.type}>{brand}</Text>
      <Text style={styles.type}>{type}</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.attributes}>{origin}</Text>
          <Text style={styles.attributes}>
            {formatter.format(price)} / 100 ml
          </Text>
        </View>
      </View>
      {!selected ? (
        <TouchableOpacity
          style={styles.button}
          onPress={handleSelect}
        >
          <Text style={styles.buttonText}>Clique para começar</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.resultContainer}>
          <TouchableOpacity
            style={styles.fillBtn}
            onLongPress={handleFill}
            onPressOut={handleStopFill}
          >
            <Text style={styles.fillText}>Encher</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.finalPrice}>{finalVolume} ml</Text>
            <Text style={styles.finalPrice}>
              {formatter.format(finalPrice)}
            </Text>
          </View>
        </View>
      )}
    </View>
  )
}
