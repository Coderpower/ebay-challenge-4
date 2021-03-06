## Package delivery

The eBay warehouse allows sellers to manage deliveries. A new option has been setup to centralise and ease product selling.

As an eBay seller, it's possible to ask for a package pick up.

If eBay drivers come near the seller's district and have enough room in their truck, the sellers will be notified with a tracking number.

> #### Objective
> Implement the function `notify(driver, sellers)` that must return an array of sellers ID that will receive a notification.

#### Specification:

- Every time the driver stops at a location **they first deliver the packages** to the **customer**.
- A driver is only able to pickup a seller package if the coordinates are one district away maximum.
  - *Moving diagonally from the grid (cf. example) is considered as covering two districts.*
- A driver cannot pick up a seller's package if no space is available in his/her truck.
- If a driver decides to pickup seller's packages, he/she must pick up all of them, he/she cannot take a sub set of it.
- **The driver must pick up as many sellers packages as possible**. For that, **you will have to come up with the decision on which stop pick up packages**.


#### Help :
```javascript
// a package
{
    id: String,
    volume: Number // space taken by the package
}
```

```javascript
// a seller
{
    id: String,
    location: String, // coordinates represented by "x, y"
    packages: [Package]
}
```

```javascript
// a driver
{
    id: String,
    capacity: Number,
    itinerary: [{
            customerId: String,
            destination: String, // coordinates represented by "x, y"
            packages: [Package]
        }]
    ]
}

```
#### Exemple:
Here an example of the grid.  

![Schema of an eBay driver's itinerary](https://db.tt/EMWJvvRP)

- The delivery starts at `"5,0"`, ends at `"7,2"`.
- The deliveries stops are `"5,0", "5,1", "6,1", "7,1", "7,2" `.
- The available pick up points are `"6,0", "6,2", "0,4"`.
- He won't be able to pick up `"0,4"` because the location is not near enough to the driver itinerary.
- He will pick up packages at `"6,0"` and `"6,2"` because it's on the driver's path and the volumes he/she dropped before lets enough space to it.

```javascript

    var driver; // will be an instance of a driver
    var sellers; // will be an array of sellers

    ....

    notify(driver, sellers); // must return a collection of sellers ID, matching the specification

```
