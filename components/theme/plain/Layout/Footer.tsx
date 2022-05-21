import React from 'react'
import Link from 'next/link'

import Container from '../Container'
import Image from '../Image'
import Navigation from './Navigation'
import IcoMoonIcon from '../IcoMoonIcon'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import Typography from '../Typography'

import { IFooter } from '../../../../interfaces/pages'
import { EnumsIcon, HeadingLevel } from '../../../../enums/common'

export default function Header({ image, navigation, text, socialsHeading, socials }: IFooter) {
  return (
    <footer className="footer">
      <Container className="header__container">
        <Row justify="space-between">
          <Col md={4}>
            {image && <Image image={image} className="footer__logo" />}
            {text && <Typography text={text} className="footer__text" />}
            {socialsHeading && (
              <Typography text={socialsHeading} level={HeadingLevel.H6} className="footer__social-heading" />
            )}
            {socials && socials.length ? (
              <ul className="social-list list-reset">
                {socials.map((item) => (
                  <li key={item.id} className="social-list__item">
                    <Link href={item.externalLink}>
                      <a className="social-list__link" target="_blank">
                        <IcoMoonIcon icon={`icon-${item.socialIcon}` as EnumsIcon} />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </Col>
          <Col md={6}>{navigation && <Navigation navigation={navigation} className="footer-navigation" />}</Col>
        </Row>
      </Container>
    </footer>
  )
}
