import React, { useState } from 'react'
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from './styles'

export interface HomeProps {
  beer: {
    name: string
    type: string
    price: number
    image?: string
    description: string
    additionalInfo: Record<string, string>
  }
}

export const Home: React.FC<HomeProps> = ({ beer }: HomeProps) => {
  const [selected, setSelected] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false)
  const [finalPrice, setFinalPrice] = useState(0)
  const [finalVolume, setFinalVolume] = useState(0)
  const [fillInterval, setFillInterval] = useState<NodeJS.Timeout>()
  const [stopInterval, setStopInterval] = useState<NodeJS.Timeout>()
  const { name, type, price, image, description, additionalInfo } =
    beer

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
    <ImageBackground
      style={styles.container}
      source={require('../../assets/wallpaper.png')}
      resizeMode='cover'
    >
      <View style={styles.infoContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <Image
          style={styles.image}
          source={
            image ? image : require('../../assets/example-1.png')
          }
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.attributes}>
          {description.length > 100 && !moreInfo
            ? `${description.substring(0, 100 - 3)}...`
            : description}
        </Text>
        {!moreInfo ? (
          <TouchableOpacity
            style={styles.moreInfoButton}
            onPress={() => setMoreInfo(true)}
          >
            <Text style={styles.moreInfoText}>+ Informações</Text>
          </TouchableOpacity>
        ) : (
          additionalInfo && (
            <>
              {Object.entries(additionalInfo).map(([key, value]) => (
                <View
                  style={styles.row}
                  key={key}
                >
                  <Text style={styles.attributeKey}>{key}: </Text>
                  <Text style={styles.attributes}>{value}</Text>
                </View>
              ))}
              <TouchableOpacity
                style={styles.moreInfoButton}
                onPress={() => setMoreInfo(false)}
              >
                <Text style={styles.moreInfoText}>- Informações</Text>
              </TouchableOpacity>
            </>
          )
        )}
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
    </ImageBackground>
  )
}
