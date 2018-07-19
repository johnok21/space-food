/* @flow */
import React, { PureComponent, Fragment } from 'react'
import BannerCarousel from 'react-native-banner-carousel'
import { StyleSheet, View } from 'react-bits'
import { Action, Text, LinkButton, Image } from 'src/components/elements'
import { Link } from 'src/navigation'
import { colors, images, metrics } from 'src/theme'

import slides from './slides'

class Slide extends PureComponent {
  render () {
    const { content } = this.props
    return <Fragment>
      <Image
        style={{
          width: metrics.screenWidth,
          height: metrics.screenHeight
        }}
        source={content.image}
      />
      <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerText} color={colors.white} size={36}>{content.text}</Text>
      </View>
    </Fragment>
  }
}

export default class Carousel extends PureComponent {
  state = {
    index: 0
  }

  onPageChanged (index) {
    this.setState({ index })
  }

  render () {
    return (
      <View style={styles.container}>
        <BannerCarousel
          index={0}
          pageSize={metrics.screenWidth}
          pageIndicatorStyle={styles.pageIndicatorStyle}
          activePageIndicatorStyle={styles.activePageIndicatorStyle}
          pageIndicatorOffset={28}
          loop={false}
          autoplay={false}
          onPageChanged={index => this.onPageChanged(index)}
        >
          {slides.map((content, index) => <Slide content={content} key={index} />)}
        </BannerCarousel>
        <View style={styles.logoContainer}>
          <Image
            source={images.logoWhite}
            style={{ width: 94, height: 27 }}
          />
        </View>
        <Action style={styles.action}>
          <LinkButton to='/register' color={this.state.index === 2 ? 'primary' : 'outlined'}>Join us</LinkButton>
          <Link to='/login' style={styles.linkStyle}>
            <Text size={14} color={colors.white} style={styles.orStyle}>or</Text>
            <Text size={14} color={colors.white} underline>Sign in</Text>
          </Link>
        </Action>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    top: 0
  },
  action: {
    position: 'absolute',
    width: '100%',
    bottom: 24,
    alignItems: 'center'
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 0,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10
  },
  bannerText: {
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 40
  },
  pageIndicatorStyle: {
    marginBottom: 135,
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 7,
    height: 14,
    width: 14,
    marginHorizontal: 7
  },
  activePageIndicatorStyle: {
    backgroundColor: colors.white
  },
  linkStyle: {
    marginTop: 10
  },
  orStyle: {
    textAlign: 'center',
    marginBottom: 10
  },
  logoContainer: {
    position: 'absolute',
    top: 32,
    alignSelf: 'center'
  }
})
