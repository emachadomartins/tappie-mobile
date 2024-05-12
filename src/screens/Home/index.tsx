import React, { useState } from 'react'
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from './styles'
import AntDesign from '@expo/vector-icons/AntDesign'

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
      resizeMethod='scale'
    >
      <View style={styles.infoContainer}>
        {!selected ? (
          <>
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
            <ScrollView style={styles.info}>
              <Text style={styles.attributes}>
                <Text style={styles.attributeKey}>Descrição: </Text>
                {description.length > 150 && !moreInfo
                  ? `${description.substring(0, 150 - 3)}...`
                  : description}
              </Text>
              {additionalInfo && moreInfo && (
                <>
                  {Object.entries(additionalInfo).map(
                    ([key, value]) => (
                      <Text
                        style={styles.attributes}
                        key={key}
                      >
                        <Text style={styles.attributeKey}>
                          {key}:{' '}
                        </Text>
                        {value}
                      </Text>
                    ),
                  )}
                </>
              )}
            </ScrollView>
            <TouchableOpacity onPress={() => setMoreInfo(!moreInfo)}>
              <AntDesign
                style={styles.moreInfoButton}
                name={moreInfo ? 'minuscircleo' : 'pluscircleo'}
                size={24}
                color='black'
              />
            </TouchableOpacity>

            {!selected && !moreInfo && (
              <View style={styles.priceContainer}>
                <Text style={styles.price}>
                  {formatter.format(price)}
                </Text>
                <Text style={styles.volume}>/ 100 ml</Text>
              </View>
            )}
          </>
        ) : (
          <></>
        )}
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <AntDesign
            style={styles.moreInfoButton}
            name={selected ? 'down' : 'up'}
            size={24}
            color='black'
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
