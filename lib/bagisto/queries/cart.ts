export const getCartQuery = /* GraphQL */ `
  query cartDetail {
    cartDetail {
      id
      customerEmail
      customerFirstName
      customerLastName
      shippingMethod
      couponCode
      isGift
      itemsCount
      itemsQty
      exchangeRate
      globalCurrencyCode
      baseCurrencyCode
      channelCurrencyCode
      cartCurrencyCode
      grandTotal
      baseGrandTotal
      subTotal
      baseSubTotal
      taxTotal
      baseTaxTotal
      discountAmount
      baseDiscountAmount
      checkoutMethod
      isGuest
      isActive
      conversionTime
      customerId
      channelId
      appliedCartRuleIds
      createdAt
      updatedAt
      items {
        id
        type
        quantity
        sku
        type
        name
        couponCode
        weight
        totalWeight
        baseTotalWeight
        price
        basePrice
        total
        baseTotal
        taxPercent
        taxAmount
        baseTaxAmount
        discountPercent
        discountAmount
        baseDiscountAmount
        parentId
        productId
        cartId
        taxCategoryId
        customPrice
        appliedCartRuleIds
        createdAt
        updatedAt
        product {
          id
          type
          name
          attributeFamilyId
          sku
          parentId
          productFlats {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
            color
            colorLabel
            size
            sizeLabel
            locale
            channel
            productId
            parentId
            minPrice
            maxPrice
            metaTitle
            metaKeywords
            metaDescription
            width
            height
            depth
            variants {
              id
              sku
              name
              description
              shortDescription
              urlKey
              new
              featured
              status
              visibleIndividually
              thumbnail
              price
              locale
              channel
              productId
              parentId
            }
            parent {
              id
              sku
              name
              description
              shortDescription
              urlKey
              new
              featured
              status
              visibleIndividually
              thumbnail
              price
              cost
              specialPrice
              specialPriceFrom
              specialPriceTo
              weight
            }
            createdAt
            updatedAt
          }
          variants {
            id
            type
            attributeFamilyId
            sku
            parentId
          }
          parent {
            id
            type
            attributeFamilyId
            sku
            parentId
          }
          attributeFamily {
            id
            code
            name
            status
            isUserDefined
          }
          attributeValues {
            id
            productId
            attributeId
            locale
            channel
            textValue
            booleanValue
            integerValue
            floatValue
            dateTimeValue
            dateValue
            jsonValue
            attribute {
              id
              code
              adminName
              type
            }
          }
          superAttributes {
            id
            code
            adminName
            type
            position
          }
          categories {
            id
            categoryId
            position
            logoPath
            logoUrl
            status
            displayMode
            Lft
            Rgt
            parentId
            additional
            bannerPath
            bannerUrl
            name
            slug
            urlPath
            description
            metaTitle
            metaDescription
            metaKeywords
            localeId
            createdAt
            updatedAt
            filterableAttributes {
              id
              adminName
              code
              type
              position
            }
            children {
              id
              name
              description
              slug
              urlPath
              logoPath
              logoUrl
              bannerPath
              bannerUrl
              metaTitle
              metaDescription
              metaKeywords
              position
              status
              displayMode
              parentId
            }
          }
          inventories {
            id
            qty
            productId
            inventorySourceId
            vendorId
            inventorySource {
              id
              code
              name
              description
              contactName
              contactEmail
              contactNumber
              contactFax
              country
              state
              city
              street
              postcode
              priority
              latitude
              longitude
              status
            }
          }
          images {
            id
            type
            path
            url
            productId
          }
          orderedInventories {
            id
            qty
            productId
            channelId
          }
          reviews {
            id
            title
            rating
            comment
            status
            productId
            customerId
            createdAt
            updatedAt
          }
          groupedProducts {
            id
            qty
            sortOrder
            productId
            associatedProductId
            associatedProduct {
              id
              type
              attributeFamilyId
              sku
              parentId
            }
          }
          downloadableSamples {
            id
            url
            file
            fileName
            type
            sortOrder
            productId
            createdAt
            updatedAt
            translations {
              id
              locale
              title
              productDownloadableSampleId
            }
          }
          downloadableLinks {
            id
            title
            price
            url
            file
            fileName
            type
            sampleUrl
            sampleFile
            sampleFileName
            sampleType
            sortOrder
            productId
            downloads
            translations {
              id
              locale
              title
              productDownloadableLinkId
            }
          }
          bundleOptions {
            id
            type
            isRequired
            sortOrder
            productId
            bundleOptionProducts {
              id
              qty
              isUserDefined
              sortOrder
              isDefault
              productBundleOptionId
              productId
            }
            translations {
              id
              locale
              label
              productBundleOptionId
            }
          }
          customerGroupPrices {
            id
            qty
            valueType
            value
            productId
            customerGroupId
            createdAt
            updatedAt
          }
        }
        formattedPrice {
          price
          basePrice
          total
          baseTotal
          taxAmount
          baseTaxAmount
          discountAmount
          baseDiscountAmount
        }
      }
      shippingAddress {
        id
        addressType
        customerId
        cartId
        orderId
        firstName
        lastName
        gender
        companyName
        address1
        address2
        postcode
        city
        state
        country
        email
        phone
        defaultAddress
        vatId
        additional
        createdAt
        updatedAt
      }
      formattedPrice {
        grandTotal
        baseGrandTotal
        subTotal
        baseSubTotal
        taxTotal
        baseTaxTotal
        discount
        baseDiscount
        discountedSubTotal
        baseDiscountedSubTotal
      }
      selectedShippingRate {
        id
        carrier
        carrierTitle
        method
        methodTitle
        methodDescription
        price
        basePrice
        discountAmount
        baseDiscountAmount
        cartAddressId
        createdAt
        updatedAt
      }
      payment {
        id
        method
        methodTitle
        cartId
        createdAt
        updatedAt
      }
    }
  }
`;
