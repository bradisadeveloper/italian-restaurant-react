import React from 'react'
import './menu.scss'

function Menu() {
    return (
        <div className="section-menu">
            {/* Starters */}
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Starters
                </h2>
            </div>
            <div className="submenu">
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Mozzarella en Carozza........$10</h3>
                        <p className="paragraph">
                            Fresh mozzarella layered with Italian bread served with marinara sauce
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Polpette Bianco........$10</h3>
                        <p className="paragraph">
                            Red wine baked chicken, beef, pork and basil meatball, served on butternut squash puree with parsley oil
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Gamberi Gratinati........$12</h3>
                        <p className="paragraph">
                            Lightly breaded shrimp served with out secret sauce
                        </p>
                    </div>
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Pasta e Fagioli........$6</h3>
                        <p className="paragraph">
                            Tender ground beef, fresh vegetables, cannellini beans, diced tomatoes with aromatic herbs
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Arugula e Finocchio........$8.50</h3>
                        <p className="paragraph">
                            Wild arugula leaves, shaved fennel, goat cheese crumble, balsamic reduction, caramelized whole nuts
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Caesar........$9</h3>
                        <p className="paragraph">
                            Romain lettuce & crouton dressed with our homemade Cesar dressing
                        </p>
                    </div>
                </div>
            </div>
            {/* Entrees */}
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Entrees
                </h2>
            </div>
            <div className="submenu">
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Penne A la Vodka........$10.99/$14.99</h3>
                        <p className="paragraph">
                            Sauteed Penne with Prosciutto, onions, and heavy cream with a touch of plum tomato
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Spaghetti........$10/$15</h3>
                        <p className="paragraph">
                            Freshly made Spaghetti pasta with parmesan, tomato sauce topped with farm raised black mushrooms
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Salmon in Pentola........$22/$29</h3>
                        <p className="paragraph">
                            Wild catched salmon fillet, topped with house citrus salsa verde served with rosemary and butter, roasted potatoes
                        </p>
                    </div>
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Chicken Marsala........$18/$25</h3>
                        <p className="paragraph">
                            Lightly breaded chicken cutlets, black mushrooms, shallots, and Marsala wine
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Costolette D’agnello........$20/$27</h3>
                        <p className="paragraph">
                            Lamb cutlets marinated in rosemary and thyme, grilled to the juiciest, layered with mozzarella and béchamel sauce
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Filet Mignon with Morel Mushrooms........$26/$33</h3>
                        <p className="paragraph">
                            A juicy 8 oz seasoned with our italian spices, cooked to perfection, topped with tender morel mushrooms
                        </p>
                    </div>
                </div>
            </div>
            {/* Desserts */}
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Desserts
                </h2>
            </div>
            <div className="submenu">
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Tiramisu........$7</h3>
                        <p className="paragraph">
                            Espresso-dipped ladyfingers and a creamy lightly sweetened mascarpone cream
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Cannoli........$7</h3>
                        <p className="paragraph">
                            Crisp and flaky cannoli shell enclosing a lusciously creamy, sweet ricotta filling which is dotted with decadent dark chocolate chips
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Gelato........$7</h3>
                        <p className="paragraph">
                            Tasty frozen ice cream imported from Italy. Flavors: Vanilla, Chocolate, Mango, and Strawberry
                        </p>
                    </div>
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Coconut Cake........$7</h3>
                        <p className="paragraph">
                            A piece of a supremely moist cake with a soft fluffy crumb and intense coconut frosting
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Chocolate Mousse........$7</h3>
                        <p className="paragraph">
                            A rich chocolate pudding with delicate whipped cream and thin shavings of dark chocolate
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Cheese Cake........$7</h3>
                        <p className="paragraph">
                            Our original Creamy Cheesecake with a Graham Cracker Crust and Sour Cream Topping
                        </p>
                    </div>
                </div>
            </div>
            {/* Wine */}
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Wine/Cocktails
                </h2>
            </div>
            <div className="submenu">
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Sparkling Wine and Champagne</h3>
                        <p className="paragraph">
                            Prosecco
                        </p>
                        <p className="paragraph">
                            Moet Chandon White
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">White Wine</h3>
                        <p className="paragraph">
                            Cakebread Sauvignon Blanc
                        </p>
                        <p className="paragraph">
                            Meiomi Napa Valley
                        </p>
                        <p className="paragraph">
                            Pouilly Fuisse Louis Jadot
                        </p>
                    </div>
                    <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">Red Wine</h3>
                        <p className="paragraph">
                            Cherry Pie Pinot Noir
                        </p>
                        <p className="paragraph">
                            Chateauneuf-du-Pape Beaurenard 2015
                        </p>
                        <p className="paragraph">
                            Twenty Bench 2016 Cabernet North Coast
                        </p>
                        <p className="paragraph">
                            Santa Cristina Antinori Sangiovese
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Cocktails</h3>
                        <p className="paragraph">
                            Pina Colada
                        </p>
                        <p className="paragraph">
                            Blue Hawaii
                        </p>
                        <p className="paragraph">
                            Mai Tai
                        </p>
                        <p className="paragraph">
                            Moscow Mule
                        </p>
                        <p className="paragraph">
                            Armaredo Sour
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu