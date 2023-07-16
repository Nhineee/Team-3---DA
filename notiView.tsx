/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
// Import vector icons
import Icon from 'react-native-vector-icons/Feather';
// import {FaBell} from 'react-icons/fa'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    Modal,

} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Alert } from 'react-native';
import { TextInput } from 'react-native';




function Noti({ navigation }): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [menuResponsive, setMenuResponsive] = useState(false);
    const [modalCreateW, setModalCreateW] = useState(false);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [modalMarkVisible, setModalMarkVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <TouchableOpacity onPress={() => setMenuResponsive(true)}>
                    <Icon name='menu' style={styles.options} />
                </TouchableOpacity>
                <Text style={[styles.fontStyle]}>Activity</Text>
                <TouchableOpacity>
                    <Icon name='check' style={styles.options} onPress={() => setModalMarkVisible(true)} />
                </TouchableOpacity>
            </View>
            <View style={styles.Middle}>
                <ScrollView>
                    {/* Option 1 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle, { flexWrap: 'wrap' }]}>Getting started in Workspace has been updated.</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 2 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 3 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 4 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 5 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 6 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 7 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 8 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 9 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 10 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 11 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 12 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>


            <View style={styles.Bottom}>
                {/* Button Tìm kiếm */}
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Icon name="search" style={styles.options} />
                </TouchableOpacity>

                {/* Button Tạo Project */}
                <TouchableOpacity onPress={() => setModalAdd(true)}>
                    <Icon name="plus" style={[styles.options, { fontSize: 28 }]} />
                </TouchableOpacity>

                {/* Button Thông Báo */}
                <TouchableOpacity onPress={() => navigation.navigate('noti')}>
                    <Icon name="bell" style={styles.options} />
                </TouchableOpacity>

                {/* Button Account */}
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <Icon name="settings" style={styles.options} />
                </TouchableOpacity>
            </View>

            {/* Modal Tìm Kiếm */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { alignItems: 'center' }]}>

                        <View style={[styles.flex, { width: 350, marginBottom: 10, paddingBottom: 10 }]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Quick Search</Text>
                            <TouchableOpacity style={{}} onPress={() => setModalVisible(!modalVisible)}>
                                <Icon name='x' style={[styles.options, { color: 'black' }]} />
                            </TouchableOpacity>
                        </View>


                        <TextInput style={styles.Input} placeholder='Search'></TextInput>
                        <View style={styles.searchContent}>
                            <ScrollView style={styles.searchScrollView}>

                                {/* Vung hien thi thong tin tim kiem */}
                                {/* <TouchableOpacity style={styles.project} onPress={HandPress}>
                                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#EA4463' }]}>
                                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                                        </View>
                                        <View style={[styles.wrapContent, { alignSelf: 'center' }]}>
                                            <Text style={styles.pTitle}>Getting started</Text>
                                        </View>
                                    </TouchableOpacity> */}
                            </ScrollView>

                            {/* Noi dung hien thi khi chua co tim kiem */}
                            <View style={styles.blankContent}>
                                <Icon name="search" style={[styles.options, { color: 'black', alignSelf: 'center', alignContent: 'center' }]} />
                                <Text style={styles.modalText}>Search all projects, comments and workspaces</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>


            {/* Modal Tạo Project */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAdd}>
                <View style={styles.centeredViewAdd}>

                    <View style={styles.warpContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.textStyleAdd, { fontWeight: 'bold' }]}>Quick Add</Text>
                            <TouchableOpacity onPress={() => setModalAdd(false)} ><Text style={styles.textStyleAdd}>Cancel</Text></TouchableOpacity>
                        </View>

                        <View style={styles.inputStyle}>
                            <TextInput style={{ color: 'white' }} placeholder='Add a new task...' placeholderTextColor={'#92969C'} ></TextInput>
                            <TouchableOpacity style={styles.DateButton} ><Text style={styles.DateText}>Date</Text></TouchableOpacity>

                        </View>


                        <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('App')}><Text style={{ color: '#EA4463' }}>Add to project</Text></TouchableOpacity>

                        <View style={styles.childStyle} >

                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible3}
                            >
                                <View style={styles.centeredViewAdd}>
                                    <View style={styles.modalViewAdd}>
                                        <View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={styles.modalTextAdd}>CHOOSE WORKSPACE</Text>
                                                <TouchableOpacity
                                                    onPress={() => setModalVisible3(false)}>
                                                    <Icon name='x' style={[styles.options, { color: 'white' }]} />
                                                </TouchableOpacity>
                                            </View>

                                            <TouchableOpacity style={[styles.childButton, { borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 15 }]}>
                                                <Text style={styles.textStyleAdd}>WorkSpaceA</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                                                <Text style={styles.textStyleAdd}>WorkSpaceB</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                                                <Text style={styles.textStyleAdd}>WorkSpaceC</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}>
                                                <Text style={styles.textStyleAdd}>WorkSpaceD</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                            <TouchableOpacity onPress={() => setModalVisible3(true)} style={[styles.childButton, { borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}>
                                <Text style={styles.textStyleAdd}>Workspace</Text>
                            </TouchableOpacity>

                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible2}
                            >
                                <View style={styles.centeredViewAdd}>
                                    <View style={styles.modalViewAdd}>
                                        <View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={styles.modalTextAdd}>CHOOSE PROJECT</Text>
                                                <TouchableOpacity
                                                    onPress={() => setModalVisible2(false)}>
                                                    <Icon name='x' style={[styles.options, { color: 'white' }]} />
                                                </TouchableOpacity>
                                            </View>

                                            <TouchableOpacity style={[styles.childButton, { borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 15 }]}>
                                                <Text style={styles.textStyleAdd}>Project A</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                                                <Text style={styles.textStyleAdd}>Project B</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                                                <Text style={styles.textStyleAdd}>Project C</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.childButton, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 1, borderTopColor: '#626468' }]}>
                                                <Text style={styles.textStyleAdd}>Project D</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalVisible2(true)} style={[styles.childButton, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 1, borderTopColor: '#626468' }]}>
                                <Text style={styles.textStyleAdd}>Project</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
            {/* Modal Check Button */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalMarkVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalMarkVisible(!modalMarkVisible);
                }}
            >
                <View style={styles.centerView}>
                    <View style={styles.modalView}>
                        <View style={styles.wrapContent}>
                            <Text style={[styles.pTitle]}>Mark all as read</Text>
                            <Text style={[styles.pTitle, { fontWeight: '300', color: '#9D9D9D' }]}>Are you sure you want to mark all as read?</Text>
                        </View>
                        <View style={styles.wrapBTN}>
                            <TouchableOpacity style={[styles.btnStyle, { borderColor: '#EA4463', borderWidth: 2 }]}>
                                <Text style={[styles.pTitle, { color: '#EA4463' }]}>Mark all as read</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnStyle, { backgroundColor: '#EA4463' }]} onPress={() => setModalMarkVisible(false)}>
                                <Text style={[styles.pTitle]}>Cancel</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </Modal>


            {/* Menu Responsive */}

            <Modal
                animationType="none"
                transparent={true}
                visible={menuResponsive}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setMenuResponsive(!menuResponsive)
                }}
            >
                <View style={styles.leftView}>
                    <View style={styles.menuContent}>

                        <View style={styles.headMenu}>
                            {/* When click btn, app will navigate to the recent Workspace */}
                            <TouchableOpacity style={styles.spaceName} onPress={() => navigation.navigate('home')}>
                                {/* Hiển Thị tên WorkSpace hiện tại */}
                                <Text style={{ fontSize: 18, color: '#EA4463', fontWeight: 'bold' }}>Workspace</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMenuResponsive(!menuResponsive)}>
                                <Icon name='chevron-left' size={25} color={'#EA4463'} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.workSpacesContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                                <Text style={{ color: 'white' }}>WORKSPACES</Text>
                                <TouchableOpacity style={{ backgroundColor: '#616161', borderRadius: 10, padding: 5 }} onPress={() => setModalCreateW(true)}>
                                    <Icon name='plus' size={20} color={'white'} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.workSpaceWrapper}>
                                <TouchableOpacity style={{ padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center' }}>
                                    {/* Hiện thị logo của Work Space */}
                                    <View style={{ backgroundColor: '#EA4463', padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                        <Text style={{ color: 'white', }}>S</Text>
                                    </View>
                                    {/* Hiện thị tên của Work Space */}
                                    <Text style={{ color: 'white' }}>SSD</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center' }}>
                                    {/* Hiện thị logo của Work Space */}
                                    <View style={{ backgroundColor: '#EA4463', padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                        <Text style={{ color: 'white', }}>W</Text>
                                    </View>
                                    {/* Hiện thị tên của Work Space */}
                                    <Text style={{ color: 'white' }}>SSD</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center', }}>
                                    {/* Hiện thị logo của Work Space */}
                                    <View style={{ backgroundColor: '#EA4463', padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                        <Text style={{ color: 'white' }}>S</Text>
                                    </View>

                                    {/* Hiện thị tên của Work Space */}
                                    <Text style={{ color: 'white' }}>Software Engineering</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal "Create a WorkSpace" */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalCreateW}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalCreateW(!modalCreateW);
                }}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { backgroundColor: '#333538' }]}>

                        <View style={[styles.flex, { width: 350, marginBottom: 10, paddingBottom: 10 }]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Create a Workspace</Text>
                            <TouchableOpacity style={{}} onPress={() => setModalCreateW(!modalCreateW)}>
                                <Icon name='x' style={[styles.options, { color: 'white' }]} />
                            </TouchableOpacity>
                        </View>

                        <TextInput style={styles.Input} placeholder='Ex.Acme or Acme Marketing' placeholderTextColor={'#BABABA'}></TextInput>
                        <View style={styles.invite}>
                            <Text style={[styles.textDate, { fontWeight: 'bold', marginTop: 10 }]}>Invite to Workspace</Text>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 10 }}>
                                <View style={{ backgroundColor: '#DDDDDD', width: 40, height: 40, borderRadius: 100, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name='user-plus' size={20} />
                                </View>
                                <TextInput placeholder='Search by e-mail or username' placeholderTextColor={'#B3B3B3'} style={{ borderBottomWidth: 1, width: 300, borderBottomColor: '#B3B3B3' }} />
                            </View>
                            <TouchableOpacity style={{ backgroundColor: "#EA4463", borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', width: 350, marginTop: 20 }}>
                                <Text style={[styles.textDate, { fontSize: 15, fontWeight: 'bold' }]}>Invite</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1F22'
    },
    Top: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    Middle: {
        flex: 1,
    },

    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: '#2E3135',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        flexDirection: 'column'
    },
    Bottom: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#7F8487'
    },
    wrapContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    wrapBTN: {
        gap: 10
    },

    btnStyle: {
        // backgroundColor: '#EA4463',
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5
    },
    fontStyle: {
        fontSize: 18,
        color: '#EAEAEA'
    },
    options: {
        fontSize: 25,
        color: 'white'
    },
    project: {
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',


    },
    projectTitle: {
        marginRight: 40,
        paddingHorizontal: 10
    },

    iconW: {
        width: 35,
        height: 35,
        borderColor: 'pink',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 18,
        color: '#EAEAEA',

    },
    miniText: {
        color: 'white',
        fontWeight: '300'
    },
    noteText: {
        alignSelf: 'center',
        color: '#EAEAEA',
        fontWeight: 'bold',
        fontSize: 15
    },
    pTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    blankContent: {
        flex: 3,
        flexDirection: 'column',
        paddingTop: 20,
        // backgroundColor:'red'
    },
    Input: {
        width: 350,
        padding: 10,
        backgroundColor: '#5B5B5B',
        borderRadius: 10,
        // borderWidth:1,
        // borderColor:'grey'
    },
    searchContent: {
        // backgroundColor: 'pink',
        height: 450,
        padding: 10

    },
    searchScrollView: {
        flexDirection: 'column',


    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    flex: {
        // backgroundColor:'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    textStyleAdd: {
        color: 'white',
        fontWeight: '400',



    },



    inputStyle: {
        borderWidth: 1,
        borderColor: '#2D3034',
        borderRadius: 10,
        width: 350,
        height: 170,
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#1C1F22',
        justifyContent: 'space-between'


    },

    DateButton: {

        width: 80,
        padding: 5,
        borderColor: '#7F8487',
        borderWidth: 0.6,
        borderRadius: 20,

    },
    DateText: {
        alignSelf: 'center',
        color: '#EAEAEA',
        fontWeight: 'bold'
    },


    AddButton: {
        borderRadius: 10,
        width: 350,
        height: 40,
        backgroundColor: '#612837',
        alignItems: 'center',
        justifyContent: 'center'
    },
    childButton: {
        height: 50,
        width: 350,
        backgroundColor: '#25282C',
        //borderRadius:
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 10,




    },

    childStyle: {

        marginTop: 10,
        height: 200,
        borderRadius: 10

    },
    modalViewAdd: {
        //margin: 20,
        backgroundColor: '#1D1F22',
        borderRadius: 20,
        padding: 25,
        elevation: 10,



    },
    chooseProjectStyle: {
        borderTopWidth: 1,
        borderTopColor: '#626468'


    },
    poptextStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalTextAdd: {
        marginBottom: 10,
        color: 'white'
    },

    centeredViewAdd: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',


    },
    warpContainer: {
        flex: 0.5,
        backgroundColor: '#1D1F22',
        //justifyContent: 'flex-end',
        elevation: 15,
        padding: 25,
        borderRadius: 20,


    },
    leftView: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        backgroundColor: '#2E3135',
        flexDirection: 'column',
        width: 300,
    },
    menuContent: {
        // margin: 20,
        // backgroundColor: 'white',
        // borderRadius: 10,
        padding: 10,
        // flexDirection:'row',
        // gap: 50

        // alignItems: 'center',
    },
    spaceName: {
        height: 50,
        justifyContent: 'center',

    },
    headMenu: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#4E4E4E',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    workSpacesContainer: {
        // marginTop:10,
        paddingVertical: 10
    },
    workSpaceWrapper: {
        // padding:20
    },
    invite: {
        flexDirection: 'column',
        marginTop: 10,
        // paddingVertical: 20
        // justifyContent: 'center',
        // alignItems: 'flex-start',
    },
    textDate: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'normal'
    },
});
export default Noti
