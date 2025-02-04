from pydantic import BaseModel


class Bean(BaseModel):
    id: str
    index: int
    isBOTD: bool
    Cost: str
    Image: str
    colour: str
    Name: str
    Description: str
    Country: str

    def to_dict(self):
        return {
            "_id": self.id,
            "index": self.index,
            "isBOTD": self.isBOTD,
            "Cost": self.Cost,
            "Image": self.Image,
            "colour": self.colour,
            "Name": self.Name,
            "Description": self.Description,
            "Country": self.Country,
        }
