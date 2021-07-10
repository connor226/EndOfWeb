import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppBreadcrumb } from './index'

import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ms-md-3 d-lg-none"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon name="cil-menu" size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon name="logo" height="48" alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
              src/components/AppHeader/CNavLink
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">src/components/AppHeader/CNavLink</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">src/components/AppHeader/CNavLink</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <h6>src/components/AppHeader/CIcon</h6>
              {/* <CIcon name="cil-bell" size="lg" /> */}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <h6>src/components/AppHeader/CIcon</h6>
              {/* <CIcon name="cil-list" size="lg" /> */}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <h6>src/components/AppHeader/CIcon</h6>
              {/* <CIcon name="cil-envelope-open" size="lg" /> */}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
