import React from 'react'
import Link from 'next/link'

import Container from '../Container'
import Image from '../Image'
import Navigation from './Navigation'
import Row from '../Grid/Row'
import Col from '../Grid/Col'

import { IHeader } from '../../../../interfaces/pages'

export default function Header({ slug, image, navigation }: IHeader) {
  return (
    <header className="header">
      <Container className="header__container">
        <Row alignItems="center">
          <Col base={4} md={3}>
            {image && image.url ? (
              <Link href="/">
                <a className="header__logo-link">
                  <Image image={image} className="header__logo" />
                </a>
              </Link>
            ) : null}
          </Col>
          <Col sm={6} md={9}>
            <Navigation navigation={navigation} className="header-navigation" />
          </Col>
        </Row>
      </Container>
    </header>
  )
}
