import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import { styles } from './Style'

import { IronLogo } from '../components/IronLogo/IronLogo';
import { IronButton } from "../components/IronButton/IronButton";
import { NameInput } from "../components/IronTextInputs/NameInput";
import { AgeInput } from "../components/IronTextInputs/AgeInput";
import { IdInput } from "../components/IronTextInputs/IdInput";
import { IronSmallLogo } from "../components/IronLogo/IronSmallLogo";
import { AddressInput } from "../components/IronTextInputs/AddressInput";
import { DescriptInput } from "../components/IronTextInputs/BriefDescriptionInput";
import { EmergencyCategoryInput } from "../components/IronTextInputs/CategoryInput";
import { PeopleInvolvedInput } from "../components/IronTextInputs/PeopleInvolvedInput";
import { ConditionInput } from "../components/IronTextInputs/ConditionInput";
import { PhoneInput } from "../components/IronTextInputs/PhoneNumber";
import { AddRemarksInput } from "../components/IronTextInputs/AdditionalRemarks";
import { IronSentButton } from "../components/IronButton/IronSentButton";


export default function Home(){

    const [isVisible, setIsVisible] = useState(true);

    return(
    <ScrollView>

        <View style={styles.appContainer}>

            <View style={[styles.homeContainer, {display: isVisible ? 'flex' : 'none'}]}>

                <View>
                    <IronLogo/>
                </View>

                <View>
                    <IronButton toggleVisibility={() => setIsVisible(prev => !prev)}/>
                </View>

            </View>

            <View style={[styles.formsContainer, {display: !isVisible ? 'flex' : 'none'}]}>

                <View>
                     <IronSmallLogo/>
                </View>

                <View style={styles.inputer}>
                    <Text style={styles.label}>Name</Text>
                    <NameInput/>
                </View>

                <View style={styles.inputer}>
                    <Text style={styles.label}>Age</Text>
                    <AgeInput/>
                </View>

                <View style={styles.inputer}>
                    <Text style={styles.label}>Identification</Text>
                    <IdInput/>
                </View>

                <View style={styles.inputer}>
                    <Text style={styles.label}>Phone Number</Text>
                    <PhoneInput/>
                </View>

                <View style={styles.inputer}>
                    <Text style={styles.label}>Current Address</Text>
                    <AddressInput/>
                </View>  

                <View style={styles.inputer}>
                    <Text style={styles.label}>Description</Text>
                    <DescriptInput/>
                </View>

                <View style={styles.inputer}>
                    <Text style={styles.label}>Emergency Category</Text>
                    <EmergencyCategoryInput/>
                </View>

                <View style={styles.inputer}>
                    <Text style={styles.label}>Number of People Involved</Text>
                    <PeopleInvolvedInput/>
                </View>

                <View style={styles.inputer}>
                    <Text style={styles.label}>People Condition</Text>
                    <ConditionInput/>
                </View>

                <View style={styles.inputer}>
                    <Text style={styles.label}>Additional Remarks</Text>
                    <AddRemarksInput/>
                </View>                                                           

                <IronSentButton/> 

            </View>
            
        </View>

    </ScrollView>
    )
}